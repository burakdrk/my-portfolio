export type Report = {
  id: number;
  position: string;
  company: string;
  color: string;
  fragments: ReportFragment[];
};

export type ReportFragment = {
  title: string;
  description: string;
};

export const reports: Report[] = [
  {
    id: 3,
    position: "Application Developer",
    company: "Kenna",
    color: "red",
    fragments: [
      {
        title: "Introduction 👋",
        description:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I am Burak and I am a 4th year Computer Science Co-op student at the University of Guelph. In this work term report, I will share my experiences working at Kenna as an application developer for the first 4 months of an 8 month term, which was my third co-op with them, highlighting what I've learned and how I accomplished my goals.",
      },
      {
        title: "Information about Kenna 📍",
        description:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kenna is a marketing solutions company located in Mississauga, Ontario helping a number of client companies by providing them software, data management solutions/systems since 1985. The team I worked with, the application dev team, designs and maintains many web applications for a client which is the part that is related to my major, computer science.",
      },
      {
        title: "Job Description 📖",
        description:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My main tasks during this term was similar to my previous terms. Things I had to do was to maintain and add new software features like APIs, frontend code, SQL stored procedures to a grower website and various campaign sites according to the business requirements and quality assurance items of the account team. This term however I also had the chance to develop a web application from scratch including its DB design, backend/frontend code. The technologies I used were TypeScript, Redux, MSSQL, React.js, Node.js and many other smaller frameworks. The tasks varied from frontend to backend equally. While maintaining and adding new features/sub-applications for these websites was my main task, I also worked on migrating the frontend of that website from the legacy frameworks to more modern frameworks using TS and React/Redux. I already had some grasp on the technologies and the transferable skills that were required for this job before starting, thanks to my previous terms. But I definitely learned more and got better as I went along so I can safely say that this co-op experience definitely enhanced my academic experience as well. I also think I was able to accomplish the goals I set for myself when I first started which I will talk about in more detail in the next section.",
      },
      {
        title: "Goals 🎯",
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My first goal was to enhance my technological literacy, with a particular focus on backend technologies like Node, SQL Server, and various design patterns. Throughout this work term, I tackled numerous tasks and QA tickets that incorporated these technologies. For example, one of the major projects I undertook required me to learn and utilize TypeScript and Redux. Another one, which I already mentioned was creating a web app from scratch which included me to work with backend technologies. By the end of the term, I could complete tasks involving these technologies faster and with fewer errors. I believe I have significantly improved my skills in this area compared to when I first started.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another goal I set was to improve my inquiry and analysis skills, especially for larger-scale tasks, to ensure effective communication with the team and successful task completion. Throughout this term, I consistently engaged with tasks that required deep reflection and problem-solving. By reflecting on what I learned and communicating effectively with the team, I contributed to generating better solutions, identifying and addressing problems efficiently, and successfully completing all my tasks. I believe my inquiry and analysis skills have improved considerably.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My final goal was to enhance my teamwork abilities, particularly in collaborating with others and dividing work to complete tasks successfully. This term, I worked on several projects that required significant collaboration. For instance, during the big migration task and some smaller application developments, teamwork played a crucial role. Compared to previous terms, I had more opportunities to collaborate with my colleagues, effectively splitting up the work and communicating efficiently. I believe I have made substantial progress in improving my teamwork skills.`,
      },
      {
        title: "Conclusion 🔚",
        description:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To sum up, I can easily say that I had a great co-op term with Kenna, accomplished all of my goals, have one more great experience to put on my resume and learned a lot more about the technologies I mentioned such as TypeScript, Redux and MSSQL, transferable skills such as teamwork, inquiry & analysis and overall software development processes in a professional business environment and I believe these will help me a lot in my future careers and academics.",
      },
      {
        title: "Acknowledgements 🏆",
        description:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I first would like to thank my supervisors Amirul and Anusha for teaching and helping me with all of the technologies I used during my work term. I also would like to thank them for giving me a return offer for this co-op term. Lastly, I would like to thank my co-op coordinators Laura and Kate, they were really helpful during the hiring process and answered all my questions, everything was clear going into this work term thanks to them.",
      },
    ],
  },
];
