import { Fragment } from 'react';
import { Mail, Rss, Briefcase } from 'lucide-react';
import SlideDeck from '@/components/deck/SlideDeck';
import { GithubIcon, LinkedinIcon } from '@/components/deck/BrandIcons';

const links = [
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
    icon: <Briefcase size={22} />,
    label: 'Wanted',
    value: '원티드 프로필',
    href: 'https://social.wanted.co.kr/community/profile/UvvemmQYYBX56cgs2y46Vw?pageType=profile',
  },
  {
    icon: <LinkedinIcon size={22} />,
    label: 'LinkedIn',
    value: 'sanggyoon-kim',
    href: 'https://www.linkedin.com/in/sanggyoon-kim-a5b2a82b7/',
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
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener"
            className="contact-row"
          >
            <span className="ci">{l.icon}</span>
            <span className="cmeta">
              <span className="cl">{l.label}</span>
              <span className="cv">{l.value}</span>
            </span>
            <span className="carrow">↗</span>
          </a>
        ))}
      </div>
    </Fragment>,
  ];

  return <SlideDeck slides={slides} labels={['Contact']} variants={['contact']} />;
}
