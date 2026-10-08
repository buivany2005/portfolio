const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');
const progress = document.querySelector('#scroll-progress');
const backToTop = document.querySelector('#back-to-top');
const languageToggle = document.querySelector('#language-toggle');
let currentLanguage = 'vi';

const translations = {
  en: {
    '#nav-links a:nth-child(1)': 'Home',
    '#nav-links a:nth-child(2)': 'About',
    '#nav-links a:nth-child(3)': 'Projects',
    '#nav-links a:nth-child(4)': 'Skills',
    '#nav-links a:nth-child(5)': 'Contact',
    '.hero .eyebrow': 'Hello, I am',
    '.hero-subtitle p': 'Information Technology | Software Full Stack',
    '.hero-description': 'I am building a modern software development foundation, from user interfaces to server-side systems.',
    '.button-primary[href="#projects"]': 'View my projects',
    '#about h2': 'About',
    '#about h3': 'Professional summary',
    '#about .section-heading + h3 + p': '<strong>Bùi Văn Ý</strong> is an Information Technology student majoring in <strong>Software (Full Stack)</strong> at <strong>Ho Chi Minh City University of Transport</strong>.',
    '#about .about-grid > div:nth-child(2) > p:nth-of-type(2)': 'Focused on developing practical, user-friendly, effective, and scalable software products. Building a foundation in <strong>Frontend, Backend, databases, and application deployment</strong> through academic study and personal projects.',
    '#about .about-grid > div:nth-child(2) > p:nth-of-type(3)': 'My career goal is to become a <strong>Full Stack Developer</strong> capable of contributing to the entire software development lifecycle: building interfaces, developing backend systems, designing databases, deploying, and operating applications. I continuously learn new technologies and improve my problem-solving skills.',
    '#about .info-card h4': 'Education',
    '#about .info-card p:nth-of-type(1)': '<strong>Ho Chi Minh City University of Transport</strong>',
    '#about .info-card p:nth-of-type(2)': '<strong>Major: Information Technology</strong>',
    '#about .info-card p:nth-of-type(3)': 'Specialization: Software (Full Stack)',
    '#about > .section-heading h2': 'About me',
    '#projects h2': 'Projects',
    '#projects .section-heading p:last-child': 'Selected projects will be updated as I continue learning and building.',
    '#skills h2': 'Skills',
    '#skills .section-heading .eyebrow': 'Technical expertise',
    '#about .section-heading.centered .eyebrow': 'Development journey',
    '#about .feature-card:nth-child(1) h3': 'Experience',
    '#about .feature-card:nth-child(1) p': 'Building experience through learning, practice, and real software projects while developing software development and testing skills.',
    '#about .feature-card:nth-child(2) h3': 'Skill set',
    '#about .feature-card:nth-child(2) p': 'Focused on full stack web development, databases, REST APIs, source control, and application deployment.',
    '#about .feature-card:nth-child(3) h3': 'Goals',
    '#about .feature-card:nth-child(3) p': 'Become a Full Stack Developer who can contribute to complete products and solve real-world problems.',
    '#projects .section-heading .eyebrow': 'Featured work',
    '#projects .project-card:nth-child(1) .tag': 'In progress',
    '#projects .project-card:nth-child(1) p': 'A personal website presenting Bùi Văn Ý’s profile, skills, and projects.',
    '#projects .project-card:nth-child(1) a': 'Discuss this project →',
    '#projects .project-card:nth-child(2) .tag': 'Full Stack',
    '#projects .project-card:nth-child(2) h3': 'Web application',
    '#projects .project-card:nth-child(2) p': 'A space for a future full stack web product.',
    '#projects .project-card:nth-child(2) a': 'View details →',
    '#projects .project-card:nth-child(3) .tag': 'Coming soon',
    '#projects .project-card:nth-child(3) h3': 'Personal project',
    '#projects .project-card:nth-child(3) p': 'Project description, technologies, and links will be added soon.',
    '#projects .project-card:nth-child(3) a': 'Contact me →',
    '#skills .skill-card:nth-child(1) p': 'HTML5, CSS3, JavaScript, Tailwind CSS, and responsive interface development.',
    '#skills .skill-card:nth-child(1) .level': 'Developing',
    '#skills .skill-card:nth-child(2) p': 'Java, Spring Boot, and REST API development.',
    '#skills .skill-card:nth-child(2) .level': 'Developing',
    '#skills .skill-card:nth-child(3) h3': 'Database',
    '#skills .skill-card:nth-child(3) p': 'MySQL, including database design, querying, and management.',
    '#skills .skill-card:nth-child(3) .level': 'Learning',
    '#skills .skill-card:nth-child(4) h3': 'DevOps & Software',
    '#skills .skill-card:nth-child(4) p': 'Git, GitHub, Docker, Docker Compose, requirements analysis, system design, software development, and testing.',
    '#skills .skill-card:nth-child(4) .level': 'Developing',
    '#contact h2': 'Contact 👋',
    '#contact .contact-intro > p:not(.eyebrow)': 'If you would like to discuss a project, learning opportunity, or collaboration, feel free to send me a message.',
    '#contact label[for="name"]': 'Full name',
    '#contact label[for="email"]': 'Reply email',
    '#contact .label-with-icon': 'Document / JD link ↗',
    '#contact label[for="message"]': 'Message',
    '#contact .button': 'Send message ➤',
    '#contact .contact-item:nth-child(1) .contact-label': 'Email',
    '#contact .contact-item:nth-child(2) .contact-label': 'Phone',
    '#contact .contact-item:nth-child(3) .contact-label': 'Work location',
    '#contact .contact-item strong': 'Vietnam',
    '#contact .form-status': '',
    '.footer-grid > div:first-child p': 'Information Technology student focusing on Software (Full Stack), continuously learning and building useful, effective software products with practical value.',
    '.footer-grid > div:nth-child(2) h3': 'Navigation',
    '.footer-grid > div:nth-child(3) h3': 'Connect'
    ,'.footer-grid > div:nth-child(2) a:nth-of-type(1)': 'About'
    ,'.footer-grid > div:nth-child(2) a:nth-of-type(2)': 'Projects'
    ,'.footer-grid > div:nth-child(2) a:nth-of-type(3)': 'Skills'
    ,'.footer-grid > div:nth-child(3) a:nth-of-type(1)': 'Email'
    ,'.footer-grid > div:nth-child(3) a:nth-of-type(2)': 'LinkedIn'
    ,'.footer-grid > div:nth-child(3) a:nth-of-type(3)': 'GitHub'
  },
  vi: {
    '#nav-links a:nth-child(1)': 'Trang chủ',
    '#nav-links a:nth-child(2)': 'Giới thiệu',
    '#nav-links a:nth-child(3)': 'Dự án',
    '#nav-links a:nth-child(4)': 'Kỹ năng',
    '#nav-links a:nth-child(5)': 'Liên hệ',
    '.hero .eyebrow': 'Xin chào, tôi là',
    '.hero-subtitle p': 'Công nghệ thông tin | Software Full Stack',
    '.hero-description': 'Tôi đang xây dựng nền tảng phát triển phần mềm hiện đại, từ giao diện người dùng đến hệ thống phía máy chủ.',
    '.button-primary[href="#projects"]': 'Xem dự án của tôi',
    '#about h2': 'Giới thiệu',
    '#about h3': 'Tóm tắt chuyên môn',
    '#about .section-heading + h3 + p': '<strong>Bùi Văn Ý</strong> là sinh viên ngành <strong>Công nghệ thông tin</strong>, chuyên ngành <strong>Software (Full Stack)</strong> tại <strong>Trường Đại học Giao thông vận tải TP. Hồ Chí Minh</strong>.',
    '#about .about-grid > div:nth-child(2) > p:nth-of-type(2)': 'Có định hướng phát triển sản phẩm phần mềm thực tế, dễ sử dụng, hiệu quả và có khả năng mở rộng. Đang xây dựng nền tảng kiến thức về <strong>Frontend, Backend, cơ sở dữ liệu và triển khai ứng dụng</strong> thông qua quá trình học tập và thực hành các dự án cá nhân.',
    '#about .about-grid > div:nth-child(2) > p:nth-of-type(3)': 'Mục tiêu nghề nghiệp là trở thành <strong>Full Stack Developer</strong>, có khả năng tham gia toàn bộ vòng đời phát triển phần mềm: xây dựng giao diện, phát triển backend, thiết kế cơ sở dữ liệu, triển khai và vận hành ứng dụng. Luôn chủ động học hỏi công nghệ mới và nâng cao kỹ năng giải quyết vấn đề.',
    '#about .info-card h4': 'Học vấn',
    '#about .info-card p:nth-of-type(1)': '<strong>Trường Đại học Giao thông vận tải TP. Hồ Chí Minh</strong>',
    '#about .info-card p:nth-of-type(2)': '<strong>Ngành Công nghệ thông tin</strong>',
    '#about .info-card p:nth-of-type(3)': 'Chuyên ngành Software (Full Stack)',
    '#about > .section-heading h2': 'Về tôi',
    '#projects h2': 'Dự án',
    '#projects .section-heading p:last-child': 'Các dự án sẽ được cập nhật thêm trong quá trình học tập và phát triển.',
    '#skills h2': 'Kỹ năng',
    '#skills .section-heading .eyebrow': 'Năng lực chuyên môn',
    '#about .section-heading.centered .eyebrow': 'Hành trình phát triển',
    '#about .feature-card:nth-child(1) h3': 'Kinh nghiệm',
    '#about .feature-card:nth-child(1) p': 'Đang tích lũy kinh nghiệm thông qua học tập, thực hành và xây dựng các sản phẩm phần mềm thực tế, đồng thời rèn luyện quy trình phát triển và kiểm thử phần mềm.',
    '#about .feature-card:nth-child(2) h3': 'Bộ kỹ năng',
    '#about .feature-card:nth-child(2) p': 'Tập trung vào phát triển web full stack, cơ sở dữ liệu, REST API, quản lý mã nguồn và triển khai ứng dụng.',
    '#about .feature-card:nth-child(3) h3': 'Mục tiêu',
    '#about .feature-card:nth-child(3) p': 'Trở thành Full Stack Developer có khả năng tham gia xây dựng sản phẩm hoàn chỉnh và giải quyết các vấn đề thực tế.',
    '#projects .section-heading .eyebrow': 'Sản phẩm tiêu biểu',
    '#projects .project-card:nth-child(1) .tag': 'Đang cập nhật',
    '#projects .project-card:nth-child(1) p': 'Website cá nhân giới thiệu thông tin, kỹ năng và các dự án của Bùi Văn Ý.',
    '#projects .project-card:nth-child(1) a': 'Trao đổi về dự án →',
    '#projects .project-card:nth-child(2) .tag': 'Full Stack',
    '#projects .project-card:nth-child(2) h3': 'Ứng dụng web',
    '#projects .project-card:nth-child(2) p': 'Không gian dành cho một sản phẩm web full stack sẽ được bổ sung sau.',
    '#projects .project-card:nth-child(2) a': 'Xem chi tiết →',
    '#projects .project-card:nth-child(3) .tag': 'Sắp ra mắt',
    '#projects .project-card:nth-child(3) h3': 'Dự án cá nhân',
    '#projects .project-card:nth-child(3) p': 'Mô tả dự án, công nghệ sử dụng và đường dẫn sẽ được cập nhật.',
    '#projects .project-card:nth-child(3) a': 'Liên hệ →',
    '#skills .skill-card:nth-child(1) p': 'HTML5, CSS3, JavaScript, Tailwind CSS và xây dựng giao diện responsive.',
    '#skills .skill-card:nth-child(1) .level': 'Đang phát triển',
    '#skills .skill-card:nth-child(2) p': 'Java, Spring Boot và phát triển REST API.',
    '#skills .skill-card:nth-child(2) .level': 'Đang phát triển',
    '#skills .skill-card:nth-child(3) h3': 'Cơ sở dữ liệu',
    '#skills .skill-card:nth-child(3) p': 'MySQL cùng kiến thức về thiết kế, truy vấn và quản lý cơ sở dữ liệu.',
    '#skills .skill-card:nth-child(3) .level': 'Đang học',
    '#skills .skill-card:nth-child(4) h3': 'DevOps & Software',
    '#skills .skill-card:nth-child(4) p': 'Git, GitHub, Docker, Docker Compose, phân tích yêu cầu, thiết kế hệ thống, xây dựng và kiểm thử phần mềm.',
    '#skills .skill-card:nth-child(4) .level': 'Đang phát triển',
    '#contact h2': 'Liên hệ 👋',
    '#contact .contact-intro > p:not(.eyebrow)': 'Nếu bạn muốn trao đổi về một dự án, cơ hội học tập hoặc hợp tác, hãy gửi tin nhắn cho tôi.',
    '#contact label[for="name"]': 'Họ và tên',
    '#contact label[for="email"]': 'Email nhận phản hồi',
    '#contact .label-with-icon': 'Link tài liệu / JD ↗',
    '#contact label[for="message"]': 'Tin nhắn',
    '#contact .button': 'Gửi tin nhắn ➤',
    '#contact .contact-item:nth-child(1) .contact-label': 'Email',
    '#contact .contact-item:nth-child(2) .contact-label': 'Điện thoại',
    '#contact .contact-item:nth-child(3) .contact-label': 'Khu vực làm việc',
    '#contact .contact-item strong': 'Việt Nam',
    '#contact .form-status': '',
    '.footer-grid > div:first-child p': 'Sinh viên Công nghệ thông tin theo định hướng Software (Full Stack), không ngừng học hỏi và phát triển những sản phẩm phần mềm hữu ích, hiệu quả và có giá trị thực tiễn.',
    '.footer-grid > div:nth-child(2) h3': 'Điều hướng',
    '.footer-grid > div:nth-child(3) h3': 'Kết nối',
    '.footer-grid > div:nth-child(2) a:nth-of-type(1)': 'Giới thiệu',
    '.footer-grid > div:nth-child(2) a:nth-of-type(2)': 'Dự án',
    '.footer-grid > div:nth-child(2) a:nth-of-type(3)': 'Kỹ năng',
    '.footer-grid > div:nth-child(3) a:nth-of-type(1)': 'Email',
    '.footer-grid > div:nth-child(3) a:nth-of-type(2)': 'LinkedIn',
    '.footer-grid > div:nth-child(3) a:nth-of-type(3)': 'GitHub'
  }
};

function setLanguage(language) {
  currentLanguage = language;
  Object.entries(translations[language]).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  });
  const placeholders = language === 'en'
    ? {
        '#name': 'Enter your name',
        '#email': 'email@example.com',
        '#resource-link': 'Paste a Google Drive or Dropbox link... (Optional)',
        '#message': 'What would you like to discuss?'
      }
    : {
        '#name': 'Nhập tên của bạn',
        '#email': 'email@cua-ban.com',
        '#resource-link': 'Dán link Google Drive, Dropbox... (Nếu có)',
        '#message': 'Bạn muốn trao đổi về điều gì?'
      };
  Object.entries(placeholders).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('placeholder', value);
  });
  document.documentElement.lang = language === 'en' ? 'en' : 'vi';
  document.title = language === 'en'
    ? 'Bui Van Y | Software Full Stack Developer'
    : 'Bùi Văn Ý | Software Full Stack Developer';
  document.querySelector('.navbar').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Điều hướng chính');
  menuToggle.setAttribute('aria-label', language === 'en' ? 'Open menu' : 'Mở menu');
  backToTop.setAttribute('aria-label', language === 'en' ? 'Scroll to top' : 'Cuộn lên đầu trang');
  backToTop.setAttribute('title', language === 'en' ? 'Back to top' : 'Lên đầu trang');
  document.querySelector('.portrait').setAttribute('alt', language === 'en' ? 'Bùi Văn Ý profile photo' : 'Ảnh đại diện Bùi Văn Ý');
  document.querySelectorAll('.feature-card img').forEach((image, index) => {
    const altText = language === 'en'
      ? ['Experience', 'Skill set', 'Goals'][index]
      : ['Kinh nghiệm', 'Bộ kỹ năng', 'Mục tiêu'][index];
    image.setAttribute('alt', altText);
  });
  document.querySelectorAll('.project-card img').forEach((image, index) => {
    image.setAttribute('alt', language === 'en' ? `Project ${index + 1}` : `Dự án ${index + 1}`);
  });
  languageToggle.querySelector('.language-vn').classList.toggle('language-active', language === 'vi');
  languageToggle.querySelector('.language-en').classList.toggle('language-active', language === 'en');
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Vietnamese' : 'Switch to English');
}

languageToggle.addEventListener('click', () => {
  setLanguage(currentLanguage === 'vi' ? 'en' : 'vi');
  updateAutoResponse();
});
setLanguage(currentLanguage);

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progress.style.width = `${percent}%`;
  backToTop.classList.toggle('visible', window.scrollY > 400);
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const emailConfig = {
  publicKey: 'QTgj8x6vKCxaE1suZ',
  serviceId: 'service_dr9o23u',
  ownerTemplateId: 'template_m8y4j1r',
  customerTemplateId: 'template_xss6q46',
  ownerEmail: 'ybv7069@gmail.com'
};

const emailjsConfigured = Object.values(emailConfig)
  .slice(0, 4)
  .every((value) => !value.startsWith('YOUR_'));

if (window.emailjs && emailjsConfigured) {
  window.emailjs.init({ publicKey: emailConfig.publicKey });
}

function setFormStatus(message, color) {
  status.textContent = message;
  status.style.color = color;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let valid = true;
  ['name', 'email', 'message'].forEach((field) => {
    const input = document.querySelector(`#${field}`);
    const error = document.querySelector(`[data-error-for="${field}"]`);
    let message = '';
    if (!input.value.trim()) {
      message = currentLanguage === 'en'
        ? 'Please enter this information.'
        : 'Vui lòng nhập thông tin này.';
    }
    if (field === 'email' && input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      message = currentLanguage === 'en' ? 'Please enter a valid email.' : 'Email không hợp lệ.';
    }
    error.textContent = message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    valid = valid && !message;
  });
  if (!valid) {
    setFormStatus('', '');
    return;
  }
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.setAttribute('aria-busy', 'true');
  setFormStatus(
    currentLanguage === 'en' ? 'Sending your message...' : 'Đang gửi tin nhắn...',
    '#475569'
  );

  try {
    if (!window.emailjs || !emailjsConfigured) {
      throw new Error('EmailJS is not configured.');
    }
      document.querySelector('#emailjs-recipient').value =
        document.querySelector('#email').value.trim();
      document.querySelector('#emailjs-name').value =
        document.querySelector('#name').value.trim();
      const [ownerResult, customerResult] = await Promise.allSettled([
      window.emailjs.sendForm(emailConfig.serviceId, emailConfig.ownerTemplateId, form, emailConfig.publicKey),
      window.emailjs.sendForm(emailConfig.serviceId, emailConfig.customerTemplateId, form, emailConfig.publicKey)
    ]);
      if (ownerResult.status === 'rejected' || customerResult.status === 'rejected') {
        const failedMessages = [];
        if (ownerResult.status === 'rejected') {
          failedMessages.push(`owner: ${ownerResult.reason?.text || ownerResult.reason?.message || 'unknown error'}`);
        }
        if (customerResult.status === 'rejected') {
          failedMessages.push(`customer: ${customerResult.reason?.text || customerResult.reason?.message || 'unknown error'}`);
        }
        throw new Error(`EmailJS delivery failed (${failedMessages.join('; ')})`);
      }
    setFormStatus(
      currentLanguage === 'en'
        ? 'Message sent successfully. A confirmation email has been sent to you.'
        : 'Gửi tin nhắn thành công. Một email xác nhận đã được gửi đến bạn.',
      '#15803d'
    );
    form.reset();
  } catch (error) {
    console.error('Contact form submission failed:', error);
    setFormStatus(
      error.message === 'EmailJS is not configured.'
        ? (currentLanguage === 'en'
          ? 'Email service is not configured yet. Please contact me directly.'
          : 'Dịch vụ email chưa được cấu hình. Vui lòng liên hệ trực tiếp với tôi.')
        : (currentLanguage === 'en'
          ? 'Unable to send the message. Please try again or email me directly.'
          : 'Không thể gửi tin nhắn. Vui lòng thử lại hoặc gửi email trực tiếp cho tôi.'),
      '#b91c1c'
    );
  } finally {
    submitButton.disabled = false;
    submitButton.removeAttribute('aria-busy');
  }
});
