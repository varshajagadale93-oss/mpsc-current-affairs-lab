/**
 * ==============================================================================
 * MPSC Current Affairs Lab - Daily Quiz Engine
 * Interactive MCQ evaluator with immediate feedback, scoring and detailed explanations
 * ==============================================================================
 */

let userAnswers = {};
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderQuizQuestions();
  setupQuizControls();
});

function renderQuizQuestions() {
  const container = document.getElementById('quiz-questions-wrapper');
  if (!container || !window.MPSC_QUIZ_DATA) return;

  const questions = window.MPSC_QUIZ_DATA;
  document.getElementById('total-q-count').textContent = questions.length;
  updateScoreDisplay();

  container.innerHTML = questions.map((q, index) => {
    const qNum = index + 1;
    const hasStatements = q.statements && q.statements.length > 0;

    return `
      <article class="question-card" id="q-card-${q.id}" data-qid="${q.id}">
        <!-- Question Header -->
        <div class="q-header">
          <span class="q-number-pill">प्रश्न क्रमांक ${qNum} / ${questions.length}</span>
          <span class="q-topic">📚 ${q.topic} • काठिण्य: ${q.difficulty}</span>
        </div>

        <!-- Question Title -->
        <h2 class="q-text">${q.question}</h2>
        <p class="q-eng-text">${q.englishQuestion}</p>

        <!-- Statements Box if any -->
        ${hasStatements ? `
          <div class="statements-box">
            ${q.statements.map(stmt => `<div>${stmt}</div>`).join('')}
          </div>
        ` : ''}

        <!-- Options List -->
        <div class="options-list" id="options-group-${q.id}">
          ${q.options.map((opt, optIdx) => {
            const letter = ['A', 'B', 'C', 'D'][optIdx];
            return `
              <button 
                type="button" 
                class="option-btn" 
                id="opt-btn-${q.id}-${optIdx}" 
                data-qid="${q.id}" 
                data-optidx="${optIdx}"
                aria-label="पर्याय ${letter}: ${opt}"
              >
                <span class="option-letter">${letter}</span>
                <span class="option-content">${opt}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Immediate Feedback Box (Hidden until answer chosen) -->
        <div class="feedback-box" id="feedback-box-${q.id}">
          <div class="feedback-badge" id="feedback-badge-${q.id}"></div>
          <div class="explanation-text" id="explanation-text-${q.id}">
            <strong>सविस्तर स्पष्टीकरण:</strong> ${q.explanation}
          </div>
          <div class="concept-box" id="concept-box-${q.id}">
            💡 <strong>MPSC संकल्पना:</strong> ${q.keyConcept}
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachOptionClickHandlers();
}

function attachOptionClickHandlers() {
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => {
    btn.addEventListener('click', handleOptionSelect);
  });
}

function handleOptionSelect(e) {
  const btn = e.currentTarget;
  const qid = parseInt(btn.getAttribute('data-qid'), 10);
  const selectedIdx = parseInt(btn.getAttribute('data-optidx'), 10);

  // If already answered, do nothing
  if (userAnswers[qid] !== undefined) return;

  const question = window.MPSC_QUIZ_DATA.find(q => q.id === qid);
  if (!question) return;

  userAnswers[qid] = selectedIdx;
  const isCorrect = selectedIdx === question.correctIndex;

  if (isCorrect) {
    score += 1;
  }

  updateScoreDisplay();

  // Highlight selected and correct buttons
  const optionsGroup = document.getElementById(`options-group-${qid}`);
  const allBtnsInGroup = optionsGroup.querySelectorAll('.option-btn');

  allBtnsInGroup.forEach((button, idx) => {
    button.disabled = true; // Freeze selection

    if (idx === question.correctIndex) {
      button.classList.add('correct');
      // Add checkmark indicator
      const checkSpan = document.createElement('span');
      checkSpan.style.marginLeft = 'auto';
      checkSpan.style.fontSize = '18px';
      checkSpan.textContent = '✓';
      button.appendChild(checkSpan);
    } else if (idx === selectedIdx && !isCorrect) {
      button.classList.add('incorrect');
      // Add cross indicator
      const crossSpan = document.createElement('span');
      crossSpan.style.marginLeft = 'auto';
      crossSpan.style.fontSize = '18px';
      crossSpan.textContent = '✗';
      button.appendChild(crossSpan);
    }
  });

  // Reveal immediate feedback box
  const feedbackBox = document.getElementById(`feedback-box-${qid}`);
  const feedbackBadge = document.getElementById(`feedback-badge-${qid}`);

  if (feedbackBox && feedbackBadge) {
    feedbackBox.className = `feedback-box show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackBadge.innerHTML = isCorrect
      ? '🎉 अभिनंदन! तुमचे उत्तर बरोबर आहे.'
      : `❌ उत्तर चुकले! योग्य पर्याय: (${['A', 'B', 'C', 'D'][question.correctIndex]}) ${question.options[question.correctIndex]}`;
  }

  // Check if all questions completed
  checkQuizCompletion();
}

function updateScoreDisplay() {
  const scoreElem = document.getElementById('live-score-val');
  if (scoreElem) {
    scoreElem.textContent = score;
  }
}

function checkQuizCompletion() {
  const totalQuestions = window.MPSC_QUIZ_DATA.length;
  const answeredCount = Object.keys(userAnswers).length;

  if (answeredCount === totalQuestions) {
    const summaryCard = document.getElementById('quiz-final-summary');
    const finalScoreElem = document.getElementById('summary-score-text');
    const reviewNoteElem = document.getElementById('summary-eval-note');

    if (summaryCard && finalScoreElem && reviewNoteElem) {
      summaryCard.classList.add('show');
      finalScoreElem.textContent = `${score} / ${totalQuestions}`;

      const percentage = (score / totalQuestions) * 100;
      let reviewText = '';
      if (percentage >= 80) {
        reviewText = '🌟 उत्कृष्ट कामगिरी! चालू घडामोडींवर तुमची पकड खूप मजबूत आहे. अशीच तयारी सुरू ठेवा!';
      } else if (percentage >= 50) {
        reviewText = '👍 समाधानकारक गुण! काही संकल्पनांची उजळणी आवश्यक आहे. डिकोडर आणि साप्ताहिक उजळणी तपासा.';
      } else {
        reviewText = '📖 अधिक सरावाची गरज आहे. संबंधित बातम्यांचा डिकोडर काळजीपूर्वक वाचा व पुन्हा सराव करा.';
      }
      reviewNoteElem.textContent = reviewText;

      summaryCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function setupQuizControls() {
  const resetBtn = document.getElementById('reset-quiz-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      userAnswers = {};
      score = 0;
      const summaryCard = document.getElementById('quiz-final-summary');
      if (summaryCard) summaryCard.classList.remove('show');
      renderQuizQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
