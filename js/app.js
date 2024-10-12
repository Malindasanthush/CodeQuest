
$(document).ready(function() {
    // First row animations
    $('.java-box').delay(200).queue(function(next) {
        $(this).addClass('show');
        next();
    });
    
    $('.js-box').delay(400).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.python-box').delay(600).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.angular-box').delay(800).queue(function(next) {
        $(this).addClass('show');
        next();
    });
    
    $('.c-box').delay(1000).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    // Second row animations
    $('.html-box').delay(1200).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.css-box').delay(1400).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.php-box').delay(1600).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.sql-box').delay(1800).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.nosql-box').delay(2000).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    // Third row animations
    $('.swift-box').delay(2200).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.kotlin-box').delay(2400).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.ts-box').delay(2600).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.flutter-box').delay(2800).queue(function(next) {
        $(this).addClass('show');
        next();
    });

    $('.react-box').delay(3000).queue(function(next) {
        $(this).addClass('show');
        next();
    });

});

$(document).ready(function () {
    let currentQuestion = 0;
    let score = 0;
    let timer;
    let timeLeft = 30;
    let selectedQuiz = 'js'; // Tracks which quiz is selected (js, java, or python)
    const totalQuestions = 15;

    function loadQuestion() {
        clearInterval(timer);
        timeLeft = 30;
        $('#timer').text(`Time Left: ${timeLeft}s`);

        const quizData = selectedQuiz === 'js' ? jsQuizData : selectedQuiz === 'java' ? javaQuizData :selectedQuiz === 'python'? pythonQuizData: selectedQuiz === 'angular'? angularQuizData: selectedQuiz === 'c'? cppQuizData:selectedQuiz === 'html'?htmlQuizData:selectedQuiz === 'css'? cssQuizData:selectedQuiz === 'php'?phpQuizData:selectedQuiz === 'sql'?sqlQuizData:selectedQuiz === 'nosql'?noSqlQuizData:selectedQuiz === 'swift'?swiftQuizData:selectedQuiz === 'kotlin'?kotlinQuizData:selectedQuiz === 'ts'?reactQuizData: selectedQuiz === 'flutter'? flutterQuizData:reactNativeQuizData ;
        const questionData = quizData[currentQuestion];
        $('#question-number').text(`Question ${currentQuestion + 1} of ${totalQuestions}`);
        $('#question').text(questionData.question);
        $('.answer-btn').each(function (index) {
            $(this).text(questionData.answers[index]);
            $(this).css('background-color', '');
            $(this).prop('disabled', false);
        });
        $('#next-question').hide();
        startTimer();
    }

    function startTimer() {
        timer = setInterval(function () {
            timeLeft--;
            $('#timer').text(`Time Left: ${timeLeft}s`);
            if (timeLeft <= 0) {
                clearInterval(timer);
                autoSelectCorrect();
            }
        }, 1000);
    }

    function autoSelectCorrect() {
        const quizData = selectedQuiz === 'js' ? jsQuizData : selectedQuiz === 'java' ? javaQuizData :selectedQuiz === 'python'? pythonQuizData: selectedQuiz === 'angular'? angularQuizData: selectedQuiz === 'c'? cppQuizData:selectedQuiz === 'html'?htmlQuizData:selectedQuiz === 'css'? cssQuizData:selectedQuiz === 'php'?phpQuizData:selectedQuiz === 'sql'?sqlQuizData:selectedQuiz === 'nosql'?noSqlQuizData:selectedQuiz === 'swift'?swiftQuizData:selectedQuiz === 'kotlin'?kotlinQuizData:selectedQuiz === 'ts'?reactQuizData: selectedQuiz === 'flutter'? flutterQuizData:reactNativeQuizData ;
        const correctIndex = quizData[currentQuestion].correct - 1;
        $('.answer-btn').eq(correctIndex).css('background-color', '#64f365 ');
        $('.answer-btn').prop('disabled', true);
        $('#next-question').show();
    }

    $('.answer-btn').click(function () {
        clearInterval(timer);
        const quizData = selectedQuiz === 'js' ? jsQuizData : selectedQuiz === 'java' ? javaQuizData :selectedQuiz === 'python'? pythonQuizData: selectedQuiz === 'angular'? angularQuizData: selectedQuiz === 'c'? cppQuizData:selectedQuiz === 'html'?htmlQuizData:selectedQuiz === 'css'? cssQuizData:selectedQuiz === 'php'?phpQuizData:selectedQuiz === 'sql'?sqlQuizData:selectedQuiz === 'nosql'?noSqlQuizData:selectedQuiz === 'swift'?swiftQuizData:selectedQuiz === 'kotlin'?kotlinQuizData:selectedQuiz === 'ts'?reactQuizData: selectedQuiz === 'flutter'? flutterQuizData:reactNativeQuizData ;
        const selectedAnswer = $(this).data('answer');
        const correctAnswer = quizData[currentQuestion].correct;

        if (selectedAnswer === correctAnswer) {
            $(this).css('background-color', '#64f365 ');
            score++;
        } else {
            $(this).css('background-color', '#ff6a4b ');
            $('.answer-btn').eq(correctAnswer - 1).css('background-color', '#64f365  ');
        }
        $('.answer-btn').prop('disabled', true);
        $('#next-question').show();
    });

    $('#next-question').click(function () {
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        $('#quiz-container').hide();
        $('#result-container').show();
        if (score >= 10) {
            $('#result-message').html(`😇👊 <br> Excellent work! You got ${score} out of 15 correct!`);
        } else if (score > 5 ){
            $('#result-message').html(`😀👍 <br> Good job! You got ${score} out of 15 correct.`);
        }else{
            $('#result-message').html(`😐👎 <br> Try Again! You got ${score} out of 15 correct.`);
        }
    }

    $('#js-box').click(function () {
        selectedQuiz = 'js';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });


    $('#java-box').click(function () {
        selectedQuiz = 'java';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });

    $('#python-box').click(function () {
        selectedQuiz = 'python';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#angular-box').click(function () {
        selectedQuiz = 'angular';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#c-box').click(function () {
        selectedQuiz = 'c';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#html-box').click(function () {
        selectedQuiz = 'html';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#css-box').click(function () {
        selectedQuiz = 'css';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#php-box').click(function () {
        selectedQuiz = 'php';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#sql-box').click(function () {
        selectedQuiz = 'sql';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#nosql-box').click(function () {
        selectedQuiz = 'nosql';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#swift-box').click(function () {
        selectedQuiz = 'swift';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#kotlin-box').click(function () {
        selectedQuiz = 'kotlin';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#ts-box').click(function () {
        selectedQuiz = 'ts';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#flutter-box').click(function () {
        selectedQuiz = 'flutter';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });
    $('#react-box').click(function () {
        selectedQuiz = 'react';
        $('.info-box').show();
        $('.container125').hide();
        $('#quiz-container').hide();
        $('.quit').click(function () {
            location.reload();
    });

    $('.restart').click(function () {
        $('.info-box').hide();
        startQuiz();
        $('#quiz-container').show();
    });
        loadQuestion();
        $('body').css('background-color', '#2c3e50');
    });

    $('#exit-btn').click(function () {
        location.reload();
    });

    function startQuiz() {
        currentQuestion = 0;
        score = 0;
        $('#quiz-container').show();
        $('#result-container').hide();
        loadQuestion();
    }
});
