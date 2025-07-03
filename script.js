// Course content data
const courseData = {
    dsa: {
  name: 'Data Structures & Algorithms',
  levels: {
    1: [
      {
        title: 'Arrays and Basic Operations',
        videoUrl: 'https://youtu.be/WUvTyaaNkzM',
        practiceUrl: 'https://leetcode.com/problems/two-sum'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      },
      {
        title: 'Linked Lists Implementation',
        videoUrl: 'https://youtu.be/HY6z3w_r3Jc',
        practiceUrl: 'https://leetcode.com/problems/reverse-linked-list'
      }
    ],
    2: [
      {
        title: 'Binary Trees and Traversal',
        videoUrl: 'https://youtu.be/fnmisPM6cVo',
        practiceUrl: 'https://leetcode.com/problems/binary-tree-inorder-traversal'
      },
      {
        title: 'Graph Algorithms',
        videoUrl: 'https://youtu.be/bXsUuownnoQ',
        practiceUrl: 'https://leetcode.com/problems/number-of-islands'
      }
    ],
    3: [
      {
        title: 'Dynamic Programming',
        videoUrl: 'https://youtu.be/OQ5jsbhAv_M',
        practiceUrl: 'https://leetcode.com/problems/climbing-stairs'
      },
      {
        title: 'Advanced Tree Problems',
        videoUrl: 'https://youtu.be/M0c9KYGfYLU',
        practiceUrl: 'https://leetcode.com/problems/validate-binary-search-tree'
      }
    ]
  }
},
dbms: {
  name: 'Database Management Systems',
  levels: {
    1: [
      {
        title: 'Introduction to DBMS',
        videoUrl: 'https://youtu.be/6stlCkUDG_s',
        practiceUrl: 'https://leetcode.com/problems/combine-two-tables'
      },
      {
        title: 'SQL Basics',
        videoUrl: 'https://youtu.be/27axs9dO7AE',
        practiceUrl: 'https://leetcode.com/problems/second-highest-salary'
      }
    ],
    2: [
      {
        title: 'Normalization',
        videoUrl: 'https://youtu.be/-2lDPB8N6_Y',
        practiceUrl: 'https://leetcode.com/problems/department-highest-salary'
      },
      {
        title: 'Transactions and Concurrency',
        videoUrl: 'https://youtu.be/avbOX7uF4cI',
        practiceUrl: 'https://leetcode.com/problems/trips-and-users'
      }
    ],
    3: [
      {
        title: 'Advanced SQL Queries',
        videoUrl: 'https://youtu.be/pzYJ4EdniQ4',
        practiceUrl: 'https://leetcode.com/problems/human-traffic-of-stadium'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      }
    ]
  }
},
os: {
  name: 'Operating Systems',
  levels: {
    1: [
      {
        title: 'Introduction to OS',
        videoUrl: 'https://youtu.be/26QPDBe-NB8',
        practiceUrl: 'https://leetcode.com/problems/design-bounded-blocking-queue'
      },
      {
        title: 'Process Management',
        videoUrl: 'https://youtu.be/LBqNWOqSzBA',
        practiceUrl: 'https://leetcode.com/problems/print-in-order'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      }
    ],
    2: [
      {
        title: 'Memory Management',
        videoUrl: 'https://youtu.be/qv3tVuYvr98',
        practiceUrl: 'https://leetcode.com/problems/building-h2o'
      },
      {
        title: 'File Systems',
        videoUrl: 'https://youtu.be/YbS6k1dN3F0',
        practiceUrl: 'https://leetcode.com/problems/design-file-system'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      }
    ],
    3: [
      {
        title: 'Deadlocks',
        videoUrl: 'https://youtu.be/zVa_F3D8FfU',
        practiceUrl: 'https://leetcode.com/problems/the-dining-philosophers'
      },
      {
        title: 'Security and Protection',
        videoUrl: 'https://youtu.be/Hxy5k2kZzDQ',
        practiceUrl: 'https://leetcode.com/problems/web-crawler-multithreaded'
      }
    ]
  }
},
coding: {
  name: 'Coding',
  levels: {
    1: [
      {
        title: 'Basic Programming Concepts',
        videoUrl: 'https://youtu.be/Z1Yd7upQsXY',
        practiceUrl: 'https://leetcode.com/problems/fizz-buzz'
      },
      {
        title: 'Control Structures',
        videoUrl: 'https://youtu.be/C0fFWZ8zFX8',
        practiceUrl: 'https://leetcode.com/problems/palindrome-number'
      }
    ],
    2: [
      {
        title: 'Object-Oriented Programming',
        videoUrl: 'https://youtu.be/pTB0EiLXUC8',
        practiceUrl: 'https://leetcode.com/problems/design-parking-system'
      },
      {
        title: 'Exception Handling',
        videoUrl: 'https://youtu.be/HcESuwmlHEY',
        practiceUrl: 'https://leetcode.com/problems/valid-parentheses'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      }
    ],
    3: [
      {
        title: 'Design Patterns',
        videoUrl: 'https://youtu.be/tLZpS4ZyZ5g',
        practiceUrl: 'https://leetcode.com/problems/lru-cache'
      },
      {
        title: 'System Design',
        videoUrl: 'https://youtu.be/UzLMhqg3_Wc',
        practiceUrl: 'https://leetcode.com/problems/design-twitter'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      },
      {
        title: 'Database Design Patterns',
        videoUrl: 'https://youtu.be/wbFiZlZlTcY',
        practiceUrl: 'https://leetcode.com/problems/department-top-three-salaries'
      }
    ]
  }
}
}

  
  let currentSubject = '';
  let currentLevel = 1;
  
  // Show levels modal
  function showLevels(subject) {
    currentSubject = subject;
    const modal = document.getElementById('levelsModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = courseData[subject].name;
    modal.style.display = 'block';
  }
  
  // Close levels modal
  function closeModal() {
    document.getElementById('levelsModal').style.display = 'none';
  }
  
  // Show topics for selected level
  function showTopics(level) {
    currentLevel = level;
    const modal = document.getElementById('topicsModal');
    const title = document.getElementById('topicsTitle');
    title.textContent = `${courseData[currentSubject].name} - Level ${level}`;

    
    const topicsList = document.getElementById('topicsList');
    const topics = courseData[currentSubject].levels[level];
    
    topicsList.innerHTML = topics.map(topic => `
      <div class="topic-item">
        <div class="topic-title">${topic.title}</div>
        <div class="topic-links">
          <a href="${topic.videoUrl}" target="_blank" class="topic-link video-link">Watch Video</a>
          <a href="${topic.practiceUrl}" target="_blank" class="topic-link practice-link">Practice</a>
        </div>
      </div>
    `).join('');
    
    document.getElementById('levelsModal').style.display = 'none';
    modal.style.display = 'block';
  }
  
  // Close topics modal
  function closeTopicsModal() {
    document.getElementById('topicsModal').style.display = 'none';
  }
  
  // Close modals when clicking outside
  window.onclick = function(event) {
    const levelsModal = document.getElementById('levelsModal');
    const topicsModal = document.getElementById('topicsModal');
    if (event.target === levelsModal) {
      levelsModal.style.display = 'none';
    }
    if (event.target === topicsModal) {
      topicsModal.style.display = 'none';
    }
  }
