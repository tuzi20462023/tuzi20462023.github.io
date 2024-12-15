document.addEventListener('DOMContentLoaded', () => {
    // 页面元素
    const welcomePage = document.getElementById('welcome-page');
    const questionPage = document.getElementById('question-page');
    const resultPage = document.getElementById('result-page');
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('options');
    const progressBar = document.querySelector('.progress');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const restartBtn = document.getElementById('restart-btn');
    const shareBtn = document.getElementById('share-btn');
    const totalScoreElement = document.getElementById('total-score');
    const levelTitleElement = document.getElementById('level-title');
    const levelDetailElement = document.getElementById('level-detail');

    // 状态变量
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);

    // 初始化总题目数
    totalQuestionsElement.textContent = questions.length;

    // 显示指定页面
    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none';
        });
        page.style.display = 'block';
        setTimeout(() => page.classList.add('active'), 50);
    }

    // 更新进度条
    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
    }

    // 显示当前问题
    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionTitle.textContent = question.title;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.style.setProperty('--index', index);
            if (userAnswers[currentQuestionIndex] === index) {
                div.classList.add('selected');
            }
            div.textContent = option.text;
            div.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(div);
        });

        // 更新按钮状态
        prevBtn.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '完成' : '下一题';
        
        updateProgress();
    }

    // 选择选项
    function selectOption(index) {
        userAnswers[currentQuestionIndex] = index;
        document.querySelectorAll('.option').forEach((option, i) => {
            option.classList.toggle('selected', i === index);
        });

        // 添加选择动画
        const selectedOption = document.querySelectorAll('.option')[index];
        selectedOption.classList.add('pulse');
        setTimeout(() => selectedOption.classList.remove('pulse'), 300);
    }

    // 计算得分和等级
    function calculateResult() {
        const totalScore = userAnswers.reduce((sum, answerIndex, questionIndex) => {
            if (answerIndex === null) return sum;
            return sum + questions[questionIndex].options[answerIndex].score;
        }, 0);

        let level = null;
        for (const [key, value] of Object.entries(levelDescriptions)) {
            if (totalScore >= value.range[0] && totalScore <= value.range[1]) {
                level = value;
                break;
            }
        }

        return { totalScore, level };
    }

    // 显示结果
    function showResult() {
        const { totalScore, level } = calculateResult();
        
        // 动画显示分数
        let currentScore = 0;
        const duration = 1500; // 1.5秒
        const increment = totalScore / (duration / 16); // 60fps
        
        function updateScore() {
            currentScore = Math.min(currentScore + increment, totalScore);
            totalScoreElement.textContent = Math.round(currentScore);
            
            if (currentScore < totalScore) {
                requestAnimationFrame(updateScore);
            }
        }
        
        requestAnimationFrame(updateScore);

        if (level) {
            levelTitleElement.textContent = level.title;
            levelDetailElement.textContent = level.description;
        }
        
        showPage(resultPage);
    }

    // 分享结果
    function shareResult() {
        const { totalScore, level } = calculateResult();
        const shareText = `我在觉知智慧与意识发展评估中获得了${totalScore}分，达到了"${level.title}"水平！`;
        
        if (navigator.share) {
            navigator.share({
                title: '觉知智慧与意识发展评估结果',
                text: shareText,
            }).catch(console.error);
        } else {
            // 如果不支持原生分享，复制到剪贴板
            navigator.clipboard.writeText(shareText).then(() => {
                alert('结果已复制到剪贴板');
            }).catch(console.error);
        }
    }

    // 事件监听
    startBtn.addEventListener('click', () => {
        showPage(questionPage);
        showQuestion();
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            if (userAnswers[currentQuestionIndex] !== null) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                // 添加提示动画
                optionsContainer.classList.add('shake');
                setTimeout(() => optionsContainer.classList.remove('shake'), 500);
                alert('请选择一个选项');
            }
        } else if (userAnswers[currentQuestionIndex] !== null) {
            showResult();
        } else {
            optionsContainer.classList.add('shake');
            setTimeout(() => optionsContainer.classList.remove('shake'), 500);
            alert('请选择一个选项');
        }
    });

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers = new Array(questions.length).fill(null);
        showPage(welcomePage);
    });

    shareBtn.addEventListener('click', shareResult);

    // 添加触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;

    questionPage.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    questionPage.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) < swipeThreshold) return;

        if (diff > 0 && currentQuestionIndex > 0) {
            // 向右滑动，上一题
            currentQuestionIndex--;
            showQuestion();
        } else if (diff < 0 && currentQuestionIndex < questions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
            // 向左滑动，下一题
            currentQuestionIndex++;
            showQuestion();
        }
    }
}); 