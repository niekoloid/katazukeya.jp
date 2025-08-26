document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const submitButton = contactForm.querySelector('.submit-button');
    const submitText = submitButton.querySelector('.submit-text');
    const submitLoading = submitButton.querySelector('.submit-loading');

    // フォーム送信処理
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // バリデーション
        if (!validateForm()) {
            return;
        }
        
        // 送信状態に変更
        setSubmitState(true);
        
        // フォームデータを取得
        const formData = new FormData(contactForm);
        
        // Ajax送信
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showMessage(data.message, 'success');
                contactForm.reset();
                
                // 成功時はページトップにスクロール
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                showMessage(data.message, 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('送信中にエラーが発生しました。お手数ですが、直接お電話ください。', 'error');
        })
        .finally(() => {
            setSubmitState(false);
        });
    });
    
    // フォームバリデーション
    function validateForm() {
        const requiredFields = [
            { id: 'name', message: 'お名前を入力してください。' },
            { id: 'phone', message: '電話番号を入力してください。' },
            { id: 'service', message: 'ご希望サービスを選択してください。' },
            { id: 'message', message: '詳細・ご要望を入力してください。' },
            { id: 'privacy', message: 'プライバシーポリシーに同意してください。' }
        ];
        
        let isValid = true;
        let firstErrorField = null;
        
        // 既存のエラー表示をクリア
        clearFieldErrors();
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            let value;
            
            if (element.type === 'checkbox') {
                value = element.checked;
            } else {
                value = element.value.trim();
            }
            
            if (!value) {
                showFieldError(element, field.message);
                isValid = false;
                
                if (!firstErrorField) {
                    firstErrorField = element;
                }
            }
        });
        
        // 電話番号の形式チェック
        const phoneField = document.getElementById('phone');
        const phoneValue = phoneField.value.trim();
        if (phoneValue && !isValidPhone(phoneValue)) {
            showFieldError(phoneField, '有効な電話番号を入力してください。');
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = phoneField;
            }
        }
        
        // メールアドレスの形式チェック
        const emailField = document.getElementById('email');
        const emailValue = emailField.value.trim();
        if (emailValue && !isValidEmail(emailValue)) {
            showFieldError(emailField, '有効なメールアドレスを入力してください。');
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = emailField;
            }
        }
        
        // エラーがある場合は最初のエラーフィールドにフォーカス
        if (!isValid && firstErrorField) {
            firstErrorField.focus();
            firstErrorField.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        
        return isValid;
    }
    
    // フィールドエラー表示
    function showFieldError(field, message) {
        field.style.borderColor = '#E53935';
        
        // 既存のエラーメッセージを削除
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // エラーメッセージを追加
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#E53935';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    
    // フィールドエラークリア
    function clearFieldErrors() {
        const errorMessages = document.querySelectorAll('.field-error');
        errorMessages.forEach(error => error.remove());
        
        const fields = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
        fields.forEach(field => {
            field.style.borderColor = '#e0e0e0';
        });
    }
    
    // メッセージ表示
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // メッセージ位置にスクロール
        formMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // 成功メッセージは5秒後に自動で非表示
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // 送信状態の切り替え
    function setSubmitState(isSubmitting) {
        if (isSubmitting) {
            submitButton.disabled = true;
            submitText.style.display = 'none';
            submitLoading.style.display = 'inline';
        } else {
            submitButton.disabled = false;
            submitText.style.display = 'inline';
            submitLoading.style.display = 'none';
        }
    }
    
    // 電話番号バリデーション
    function isValidPhone(phone) {
        const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
        return phoneRegex.test(phone) && phone.replace(/[^0-9]/g, '').length >= 10;
    }
    
    // メールアドレスバリデーション
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // リアルタイムバリデーション（フォーカスアウト時）
    const formFields = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            // エラー状態の場合のみリアルタイムバリデーション
            if (this.style.borderColor === 'rgb(229, 57, 53)' || this.style.borderColor === '#E53935') {
                validateField(this);
            }
        });
        
        // 入力時にエラー状態をクリア
        field.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(229, 57, 53)' || this.style.borderColor === '#E53935') {
                this.style.borderColor = '#e0e0e0';
                const errorMsg = this.parentNode.querySelector('.field-error');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
    
    // 単一フィールドバリデーション
    function validateField(field) {
        const fieldId = field.id;
        let isValid = true;
        let errorMessage = '';
        
        // 必須チェック
        const requiredFields = ['name', 'phone', 'service', 'message', 'privacy'];
        if (requiredFields.includes(fieldId)) {
            let value = field.type === 'checkbox' ? field.checked : field.value.trim();
            if (!value) {
                isValid = false;
                switch (fieldId) {
                    case 'name': errorMessage = 'お名前を入力してください。'; break;
                    case 'phone': errorMessage = '電話番号を入力してください。'; break;
                    case 'service': errorMessage = 'ご希望サービスを選択してください。'; break;
                    case 'message': errorMessage = '詳細・ご要望を入力してください。'; break;
                    case 'privacy': errorMessage = 'プライバシーポリシーに同意してください。'; break;
                }
            }
        }
        
        // 形式チェック
        if (isValid && fieldId === 'phone' && field.value.trim()) {
            if (!isValidPhone(field.value.trim())) {
                isValid = false;
                errorMessage = '有効な電話番号を入力してください。';
            }
        }
        
        if (isValid && fieldId === 'email' && field.value.trim()) {
            if (!isValidEmail(field.value.trim())) {
                isValid = false;
                errorMessage = '有効なメールアドレスを入力してください。';
            }
        }
        
        // エラー表示/非表示
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            field.style.borderColor = '#4CAF50';
        }
        
        return isValid;
    }
});