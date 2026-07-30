import { Fragment } from 'react';
import { Mail, Rss, MessageCircle } from 'lucide-react';
import SlideDeck from '@/components/deck/SlideDeck';
import { GithubIcon, LinkedinIcon } from '@/components/deck/BrandIcons';

type ContactLink = {
  icon: React.ReactNode;
  label: string;
  value: string;
  /** external/mailto link; omitted for display-only rows (e.g. KakaoTalk ID) */
  href?: string;
};

const links: ContactLink[] = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'sangreal4262@gmail.com',
    href: 'mailto:sangreal4262@gmail.com',
  },
  {
    icon: <GithubIcon size={22} />,
    label: 'GitHub',
    value: 'github.com/sanggyoon',
    href: 'https://github.com/sanggyoon',
  },
  {
    icon: <Rss size={22} />,
    label: 'Velog',
    value: 'velog.io/@sanggyoon',
    href: 'https://velog.io/@sanggyoon/posts',
  },
  {
    icon: <LinkedinIcon size={22} />,
    label: 'LinkedIn',
    value: 'sanggyoon-kim',
    href: 'https://www.linkedin.com/in/sanggyoon-kim-a5b2a82b7/',
  },
  {
    icon: <MessageCircle size={22} />,
    label: 'KakaoTalk ID',
    value: 'tkdrbs518',
  },
];

export default function Contact() {
  const slides = [
    <Fragment key="contact">
      <div className="eyebrow">
        <span className="sec">Contact</span>
      </div>
      <h1 className="head">언제든 편하게 연락 주세요</h1>
      <div className="contact-list">
        {links.map((l) => {
          const inner = (
            <>
              <span className="ci">{l.icon}</span>
              <span className="cmeta">
                <span className="cl">{l.label}</span>
                <span className="cv">{l.value}</span>
              </span>
              {l.href ? <span className="carrow">↗</span> : null}
            </>
          );
          return l.href ? (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener"
              className="contact-row"
            >
              {inner}
            </a>
          ) : (
            <div key={l.label} className="contact-row static">
              {inner}
            </div>
          );
        })}
      </div>
    </Fragment>,
  ];

  return (
    <SlideDeck slides={slides} labels={['Contact']} variants={['contact']} />
  );
}
