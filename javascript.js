const departments = [
  {
    name: "تقنية المعلومات",
    projects: [
      {
        title: "نظام إدارة المحتوى الإلكتروني",
        intro: "مشروع لتطوير منصة لإدارة المحتوى التعليمي.",
        goals: "تبسيط إدارة الدروس، رفع الملفات، تنظيم المواد الدراسية."
      },
      {
        title: "تطبيق جوال للتعليم الإلكتروني",
        intro: "تطبيق يدعم التعليم عن بعد بطريقة تفاعلية.",
        goals: "تمكين الطلاب من الوصول للدروس والمناقشات في أي وقت."
      }
    ]
  },
  {
    name: "التقنية الكهربائية",
    projects: [
      {
        title: "نظام تحكم في الإضاءة الذكية",
        intro: "نظام يتحكم بالإضاءة تلقائيًا بناءً على الحركة والضوء.",
        goals: "توفير استهلاك الكهرباء وزيادة الأمان."
      },
      {
        title: "مشروع الطاقة المتجددة",
        intro: "تصميم منظومة توليد طاقة شمسية.",
        goals: "توفير مصدر طاقة صديق للبيئة يدعم مباني الكلية."
      }
    ]
  },
  {
    name: "التقنية الإدارية",
    projects: [
      {
        title: "نظام إدارة الموارد البشرية",
        intro: "نظام داخلي لإدارة بيانات الموظفين.",
        goals: "تنظيم بيانات التوظيف، الرواتب، والإجازات."
      },
      {
        title: "تحليل بيانات المبيعات",
        intro: "مشروع يعرض تحليلات لمبيعات شركة باستخدام Excel وPower BI.",
        goals: "معرفة أفضل المنتجات وتحديد الفترات المربحة."
      }
    ]
  },
  {
    name: "تقنية الحاسب",
    projects: [
      {
        title: "نظام إدارة البيانات",
        intro: "نظام لتخزين البيانات وتسهيل الوصول إليها.",
        goals: "توفير طريقة سهلة وفعالة لإدارة البيانات."
      }
    ]
  },
  {
    name: "تقنية الاتصالات",
    projects: [
      {
        title: "شبكة الاتصالات الداخلية",
        intro: "تصميم شبكة اتصالات فعالة للكلية.",
        goals: "تحقيق الاتصال السلس بين جميع الأجهزة في الكلية."
      }
    ]
  },
  {
    name: "تقنية التصميم الجرافيكي",
    projects: [
      {
        title: "تصميم شعار الكلية",
        intro: "مشروع لتصميم شعار الكلية باستخدام أدوات التصميم.",
        goals: "إنتاج شعار يعبر عن هوية الكلية."
      }
    ]
  }
];

const departmentsSection = document.getElementById('departments');
const projectsSection = document.getElementById('projects');
const departmentTitle = document.getElementById('department-title');
const projectList = document.getElementById('project-list');
const backButton = document.getElementById('back-button');

departments.forEach((dept, index) => {
  const card = document.createElement('div');
  card.className = 'department-card';
  card.innerHTML = `<h3>${dept.name}</h3><p>اضغط لعرض المشاريع</p>`;
  card.addEventListener('click', () => showProjects(index));
  departmentsSection.appendChild(card);
});

function showProjects(index) {
  const dept = departments[index];
  departmentTitle.textContent = dept.name;
  projectList.innerHTML = '';
  dept.projects.forEach(project => {
    const box = document.createElement('div');
    box.className = 'project-box';
    box.innerHTML = `
      <h3>${project.title}</h3>
      <p><strong>مقدمة:</strong> ${project.intro}</p>
      <p><strong>الأهداف:</strong> ${project.goals}</p>
    `;
    projectList.appendChild(box);
  });
  departmentsSection.style.display = 'none';
  projectsSection.classList.add('visible');
}

backButton.addEventListener('click', () => {
  projectsSection.classList.remove('visible');
  departmentsSection.style.display = 'flex';
});
