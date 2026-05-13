import { useState } from 'react';
import { useLang, t } from '../LangContext';

export default function Contact() {
  const { lang } = useLang();
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Compose mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${form.project || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\n\n${form.message}`
    );
    window.open(`mailto:yousefalkhayreey@gmail.com?subject=${subject}&body=${body}`);
    setStatus('sent');
    setForm({ name: '', email: '', project: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" data-component="contact" aria-label="Contact">
      <div className="stag r">{t('Get In Touch', 'تواصل معي', lang)}</div>
      <div className="stitle r">
        {t("LET'S ", 'لنعمل ', lang)}<span className="g">{t('WORK', 'معاً', lang)}</span>
      </div>

      <div className="cgrid">
        <form className="cform rl" onSubmit={handleSubmit}>
          <div>
            <label className="fl">{t('Your Name', 'اسمك', lang)}</label>
            <input className="fi" type="text" placeholder="Ahmed Hassan" required
              value={form.name} onChange={set('name')} />
          </div>
          <div>
            <label className="fl">{t('Email Address', 'البريد الإلكتروني', lang)}</label>
            <input className="fi" type="email" placeholder="hello@company.com" required
              value={form.email} onChange={set('email')} />
          </div>
          <div>
            <label className="fl">{t('Project Type', 'نوع المشروع', lang)}</label>
            <input className="fi" type="text" placeholder="Social Campaign / Brand Identity / 3D Visual..."
              value={form.project} onChange={set('project')} />
          </div>
          <div>
            <label className="fl">{t('Message', 'الرسالة', lang)}</label>
            <textarea className="fi fta" placeholder={t('Tell me about your project...', 'أخبرني عن مشروعك...', lang)}
              value={form.message} onChange={set('message')} />
          </div>
          <button className="fsub" type="submit">
            {status === 'sent'
              ? t('Message Sent ✓', 'تم الإرسال ✓', lang)
              : t('Send Message →', 'إرسال الرسالة ←', lang)}
          </button>
        </form>

        <div className="cinfo rr">
          <div>
            <div className="ci-lbl">{t('Email', 'البريد', lang)}</div>
            <a href="mailto:yousefalkhayreey@gmail.com" className="ci-val">
              yousefalkhayreey@gmail.com
            </a>
          </div>
          <div>
            <div className="ci-lbl" style={{ marginBottom: 16 }}>{t('Connect', 'تواصل', lang)}</div>
            <div className="slinks">
              <a href="https://www.instagram.com/yousef_sliem14/" target="_blank" rel="noopener noreferrer" className="sl">
                <div>
                  <div>Instagram</div>
                  <div className="sl-handle">@yousef_sliem14</div>
                </div>
                <span className="sl-arr">→</span>
              </a>
              <a href="https://wa.me/c/201505342456" target="_blank" rel="noopener noreferrer" className="sl">
                <div>
                  <div>WhatsApp</div>
                  <div className="sl-handle">{t('Available for Projects', 'متاح للمشاريع', lang)}</div>
                </div>
                <span className="sl-arr">→</span>
              </a>
              <a href="https://www.behance.net/yousefsliem" target="_blank" rel="noopener noreferrer" className="sl">
                <div>
                  <div>Behance</div>
                  <div className="sl-handle">@yousefsliem</div>
                </div>
                <span className="sl-arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
