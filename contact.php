<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// POSTリクエストのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// 設定
$to_email = 'info@akatsuki.works'; // ここに受信したいメールアドレスを設定
$from_email = 'noreply@akatsuki.works';
$subject = '【片付け屋.jp】お問い合わせフォームからのお問い合わせ';

// 入力データの取得とサニタイズ
$name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8')) : '';
$phone = isset($_POST['phone']) ? trim(htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8')) : '';
$email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8')) : '';
$address = isset($_POST['address']) ? trim(htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8')) : '';
$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'], ENT_QUOTES, 'UTF-8')) : '';
$urgency = isset($_POST['urgency']) ? trim(htmlspecialchars($_POST['urgency'], ENT_QUOTES, 'UTF-8')) : '';
$message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')) : '';
$privacy = isset($_POST['privacy']) ? $_POST['privacy'] : '';

// バリデーション
$errors = [];

if (empty($name)) {
    $errors[] = 'お名前は必須項目です。';
}

if (empty($phone)) {
    $errors[] = '電話番号は必須項目です。';
} elseif (!preg_match('/^[0-9\-\+\(\)\s]+$/', $phone)) {
    $errors[] = '有効な電話番号を入力してください。';
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = '有効なメールアドレスを入力してください。';
}

if (empty($service)) {
    $errors[] = 'ご希望サービスは必須項目です。';
}

if (empty($message)) {
    $errors[] = '詳細・ご要望は必須項目です。';
}

if (empty($privacy)) {
    $errors[] = 'プライバシーポリシーへの同意は必須です。';
}

// エラーがある場合は返す
if (!empty($errors)) {
    echo json_encode([
        'success' => false, 
        'message' => implode('\n', $errors)
    ]);
    exit;
}

// スパム対策（簡易）
if (strlen($message) > 2000) {
    echo json_encode([
        'success' => false, 
        'message' => 'メッセージが長すぎます。'
    ]);
    exit;
}

// メール本文の作成
$mail_body = "お問い合わせフォームから新しいお問い合わせが届きました。\n\n";
$mail_body .= "■ お客様情報\n";
$mail_body .= "お名前: " . $name . "\n";
$mail_body .= "電話番号: " . $phone . "\n";
$mail_body .= "メールアドレス: " . ($email ?: '未入力') . "\n";
$mail_body .= "住所: " . ($address ?: '未入力') . "\n";
$mail_body .= "ご希望サービス: " . $service . "\n";
$mail_body .= "緊急度: " . ($urgency ?: '未選択') . "\n\n";
$mail_body .= "■ 詳細・ご要望\n";
$mail_body .= $message . "\n\n";
$mail_body .= "■ 送信情報\n";
$mail_body .= "送信日時: " . date('Y-m-d H:i:s') . "\n";
$mail_body .= "送信元IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
$mail_body .= "ユーザーエージェント: " . $_SERVER['HTTP_USER_AGENT'] . "\n";

// メールヘッダーの設定
$headers = [];
$headers[] = 'From: ' . $from_email;
$headers[] = 'Reply-To: ' . ($email ?: $from_email);
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// メール送信
$mail_sent = mail($to_email, $subject, $mail_body, implode("\r\n", $headers));

if ($mail_sent) {
    // 自動返信メール（お客様宛）
    if (!empty($email)) {
        $customer_subject = '【片付け屋.jp】お問い合わせありがとうございます';
        $customer_body = $name . " 様\n\n";
        $customer_body .= "この度は、片付け屋.jpにお問い合わせいただき、ありがとうございます。\n";
        $customer_body .= "以下の内容でお問い合わせを承りました。\n\n";
        $customer_body .= "■ お問い合わせ内容\n";
        $customer_body .= "ご希望サービス: " . $service . "\n";
        $customer_body .= "緊急度: " . ($urgency ?: '未選択') . "\n";
        $customer_body .= "詳細・ご要望: " . $message . "\n\n";
        $customer_body .= "担当者より、24時間以内にご連絡いたします。\n";
        $customer_body .= "お急ぎの場合は、直接お電話ください。\n\n";
        $customer_body .= "電話: 080-7383-0972（24時間受付）\n\n";
        $customer_body .= "今後ともよろしくお願いいたします。\n\n";
        $customer_body .= "片付け屋.jp\n";
        $customer_body .= "https://katazukeya.jp\n";

        $customer_headers = [];
        $customer_headers[] = 'From: ' . $from_email;
        $customer_headers[] = 'Content-Type: text/plain; charset=UTF-8';
        
        mail($email, $customer_subject, $customer_body, implode("\r\n", $customer_headers));
    }
    
    echo json_encode([
        'success' => true, 
        'message' => 'お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => '送信に失敗しました。お手数ですが、直接お電話ください。'
    ]);
}
?>