const mockAI = {
  analyzeJD: (rawText = '') => {
    const text = rawText.toLowerCase();
    const skills = ['Java', 'Python', 'React', 'SQL', 'Git'];
    const foundSkills = skills.filter((skill) => text.includes(skill.toLowerCase()));
    return {
      jobTitle: 'Software Engineer',
      requiredSkills: foundSkills.length ? foundSkills : ['Java', 'React', 'SQL'],
      minimumCGPA: 7.0,
      eligibleDepartments: ['CSE', 'IT', 'ECE'],
      experience: 'Fresher',
      requiredDegree: 'B.Tech / B.E.',
      confidence: 0.94,
      summary: 'AI extracted core requirements from the uploaded job description.',
      requiresHumanReview: false,
    };
  },

  checkEligibility: (student, job) => {
    const reasons = [];
    if (student.cgpa < (job.minimumCGPA || 0)) reasons.push(`CGPA requirement: ${job.minimumCGPA}; Student CGPA: ${student.cgpa}`);
    if (job.eligibleDepartments && !job.eligibleDepartments.includes(student.department)) reasons.push(`Department not allowed: ${student.department}`);
    if (job.backlogsAllowed === 0 && student.backlogs > 0) reasons.push(`Backlogs allowed: 0; Student backlogs: ${student.backlogs}`);
    if (job.requiredDegree && !student.degree.toLowerCase().includes(job.requiredDegree.toLowerCase().replace(/\s*\/\s*/g, ' ').split(' ')[0])) {
      reasons.push(`Degree mismatch: ${student.degree}`);
    }
    const eligible = reasons.length === 0;
    return {
      eligible,
      status: eligible ? 'Eligible' : 'Not Eligible',
      reasons,
      confidence: 0.9,
      requiresHumanReview: false,
    };
  },

  matchCandidate: (student, job) => {
    const skillSet = new Set((student.skills || []).map((s) => s.toLowerCase()));
    const required = (job.requiredSkills || []).map((s) => s.toLowerCase());
    const skillMatch = Math.min(100, Math.round((required.filter((s) => skillSet.has(s)).length / Math.max(required.length, 1)) * 100));
    const educationMatch = student.degree && student.degree.toLowerCase().includes('b.tech') ? 100 : 80;
    const cgpaMatch = Math.min(100, Math.round((student.cgpa / Math.max(job.minimumCGPA || 7, 1)) * 100));
    const projectRelevance = 88;
    const certification = Math.min(100, (student.certifications || []).length * 20 + 40);
    const experience = 90;

    const weightedScore =
      skillMatch * 0.4 +
      educationMatch * 0.15 +
      cgpaMatch * 0.15 +
      projectRelevance * 0.15 +
      certification * 0.1 +
      experience * 0.05;

    const score = Math.min(100, Math.round(weightedScore));
    const gaps = required.filter((skill) => !skillSet.has(skill)).slice(0, 3);
    return {
      matchScore: score,
      breakdown: {
        skillsMatch: skillMatch,
        educationMatch: educationMatch,
        cgpaMatch: cgpaMatch,
        projectRelevance: projectRelevance,
        certification: certification,
        experience: experience,
      },
      reasons: [
        'Strong React experience',
        'Good Java knowledge',
        'Relevant full-stack project',
        'Meets CGPA requirement',
        'SQL certification',
      ],
      skillGaps: gaps.length ? gaps : ['Docker', 'AWS'],
      recommendation: 'AI Recommendation — Human approval required.',
      requiresHumanReview: true,
    };
  },

  skillGap: (student, job) => ({
    studentSkills: student.skills || ['React', 'Java', 'SQL'],
    jobDemand: job.requiredSkills || ['React', 'Java', 'SQL', 'Docker', 'AWS'],
    gaps: ['AWS', 'Docker', 'System Design'],
    suggestions: ['AWS fundamentals', 'Docker basics', 'System Design fundamentals'],
  }),

  readiness: (student) => ({
    score: 78,
    categories: {
      technicalSkills: 82,
      communication: 70,
      resumeQuality: 85,
      projects: 80,
      interviewPreparation: 72,
      codingSkills: 78,
    },
    level: 'Almost Ready',
    recommendations: ['Improve communication practice', 'Strengthen system design basics', 'Add measurable project outcomes'],
  }),

  interviewQuestions: (student, job) => ({
    technical: ['Explain React component lifecycle', 'How do you optimize SQL queries?', 'What is REST API design?'],
    hr: ['Tell us about yourself', 'Why do you want this role?'],
    roleSpecific: ['Design a scalable booking system', 'Discuss your recent full-stack project'],
    weakAreas: ['AWS', 'Docker', 'System Design'],
    focus: ['React', 'Java', 'SQL', 'Data Structures', 'REST APIs'],
  }),
};

export default mockAI;
