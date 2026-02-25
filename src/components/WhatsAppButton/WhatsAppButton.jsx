import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917835000222"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-4 md:left-6 bg-[#25D366] text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-[#20BA5A] transition-all z-50"
    >
      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
      <span className="font-semibold text-sm md:text-base">Chat With Us</span>
    </a>
  );
}
