type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sanketh G | Full Stack Developer",
    fullName: "Sanketh G",
    email: "gsanketh7121@mail.com",
  },

  hero: {
    name: "Sanketh G",
    p: [
      "I build scalable web applications with modern user interfaces and reliable backend systems.",
    ],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a Full Stack Developer with over 3 years of experience
      building scalable and efficient web applications. I specialize in
      Angular, TypeScript, C#, and .NET, developing modern user interfaces
      and robust backend APIs.

      I have hands-on experience working with enterprise applications such
      as HRMS systems, authentication modules, and API-driven platforms.
      My work focuses on creating clean, maintainable code and building
      reliable systems that deliver smooth user experiences.

      I’m passionate about solving real-world problems through technology,
      continuously learning new tools, and building high-quality software
      that is scalable, efficient, and impactful.`,
    },

    experience: {
      p: "My professional journey",
      h2: "Work Experience.",
    },

    feedbacks: {
      p: "What people say",
      h2: "Testimonials.",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects highlight my experience in building
      full-stack web applications using Angular, .NET, and modern database
      technologies. These projects demonstrate my ability to design
      responsive user interfaces, develop secure backend APIs, integrate
      databases, and deliver scalable solutions.

      Each project reflects my approach to problem solving, writing
      maintainable code, and building real-world applications that meet
      business requirements.`,
    },
  },
};
