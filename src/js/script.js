document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('WhatsAppForm');
    
    whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const captchaAnswer = document.getElementById('captcha').value;
        if (captchaAnswer !== '7') { 
            document.getElementById('captcha').style.border = '1px solid red';
            document.getElementById('captcha').value = '';
            return;
        }
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('number').value; 
        const service = document.getElementById('services-list').value; 
        const enterprise = "VG Estética Automotiva";
        
        const whatsappNumber = '5516997349790'; 
        
        const message = `Olá! Meu nome é ${name}. WhatsApp: ${phone}. Gostaria de solicitar um orçamento do serviço de ${service} na ${enterprise}.`;
        
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
        
        document.getElementById('captcha').style.border = '1px solid transparent';
        whatsappForm.reset();
    });
});

// Evento para ocultar o botão do WhatsApp quando a seção de contato estiver visível
document.addEventListener('DOMContentLoaded', function() {
    const wpFloatButton = document.querySelector('.wp-float');
    const contactSection = document.getElementById('contact');
    
    function checkVisibility() {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        wpFloatButton.style.display = isVisible ? 'none' : 'block';  
    }
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});


