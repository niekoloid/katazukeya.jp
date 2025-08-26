import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  phone: string
  email?: string
  address?: string
  service: string
  urgency?: string
  message: string
  privacy: boolean
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // バリデーション
    if (!data.name || !data.phone || !data.service || !data.message || !data.privacy) {
      return NextResponse.json(
        { success: false, message: '必須項目を入力してください。' },
        { status: 400 }
      )
    }

    // 電話番号の形式チェック
    const phoneRegex = /^[0-9\-\+\(\)\s]+$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { success: false, message: '有効な電話番号を入力してください。' },
        { status: 400 }
      )
    }

    // メールアドレスの形式チェック（任意項目）
    if (data.email && !isValidEmail(data.email)) {
      return NextResponse.json(
        { success: false, message: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      )
    }

    // メール送信設定
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // または使用するSMTPサーバー
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // 管理者宛メール
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@akatsuki.works',
      subject: '【片付け屋.jp】お問い合わせフォームからのお問い合わせ',
      text: createAdminEmailBody(data),
    }

    // 顧客宛自動返信メール（メールアドレスが入力されている場合のみ）
    let customerMailOptions = null
    if (data.email) {
      customerMailOptions = {
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: '【片付け屋.jp】お問い合わせありがとうございます',
        text: createCustomerEmailBody(data),
      }
    }

    // メール送信
    await transporter.sendMail(adminMailOptions)
    if (customerMailOptions) {
      await transporter.sendMail(customerMailOptions)
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: '送信に失敗しました。お手数ですが、直接お電話ください。' },
      { status: 500 }
    )
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function createAdminEmailBody(data: ContactFormData): string {
  return `お問い合わせフォームから新しいお問い合わせが届きました。

■ お客様情報
お名前: ${data.name}
電話番号: ${data.phone}
メールアドレス: ${data.email || '未入力'}
住所: ${data.address || '未入力'}
ご希望サービス: ${data.service}
緊急度: ${data.urgency || '未選択'}

■ 詳細・ご要望
${data.message}

■ 送信情報
送信日時: ${new Date().toLocaleString('ja-JP')}
`
}

function createCustomerEmailBody(data: ContactFormData): string {
  return `${data.name} 様

この度は、片付け屋.jpにお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを承りました。

■ お問い合わせ内容
ご希望サービス: ${data.service}
緊急度: ${data.urgency || '未選択'}
詳細・ご要望: ${data.message}

担当者より、24時間以内にご連絡いたします。
お急ぎの場合は、直接お電話ください。

電話: 080-7383-0972（24時間受付）

今後ともよろしくお願いいたします。

片付け屋.jp
運営：株式会社曉
https://katazukeya.jp
`
}