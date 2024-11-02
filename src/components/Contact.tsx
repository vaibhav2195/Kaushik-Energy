import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = {
  phone: "+91-9368790588",
  email: "kaushikenergy26@gmail.com",
  address: "Ambehta Sekha Road, Near Sugar Mill, Deoband, Saharanpur (UP)-247554"
};

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-yellow-400" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-yellow-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}