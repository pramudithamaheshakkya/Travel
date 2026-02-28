import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/94705522299?text=Hello%20Zelenso%20Travel%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={26} color="white" fill="white" />
        </a>
    );
}
