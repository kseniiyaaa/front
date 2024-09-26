function validateForm() {
    const namePattern = /^[А-ЯІЇЄҐ]{1}[а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const variantPattern = /^\d{2}$/;
    const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
    const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const idCardPattern = /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/;

    const name = document.getElementById('name').value;
    const variant = document.getElementById('variant').value;
    const group = document.getElementById('group').value;
    const phone = document.getElementById('phone').value;
    const idCard = document.getElementById('idCard').value;

    let isValid = true;

    if (!namePattern.test(name)) {
        document.getElementById('name').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('name').style.borderColor = '';
    }

    if (!variantPattern.test(variant)) {
        document.getElementById('variant').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('variant').style.borderColor = '';
    }

    if (!groupPattern.test(group)) {
        document.getElementById('group').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('group').style.borderColor = '';
    }

    if (!phonePattern.test(phone)) {
        document.getElementById('phone').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('phone').style.borderColor = '';
    }

    if (!idCardPattern.test(idCard)) {
        document.getElementById('idCard').style.borderColor = 'red';
        isValid = false;
    } else {
        document.getElementById('idCard').style.borderColor = '';
    }

    if (isValid) {
        const info = `ПІБ: ${name}\nВаріант: ${variant}\nГрупа: ${group}\nТелефон: ${phone}\nID-card: ${idCard}`;
        window.open().document.write(`<pre>${info}</pre>`);
    }
}