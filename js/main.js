document.addEventListener('DOMContentLoaded', function() {
    const lessons = document.querySelectorAll('.lesson-list li');
    const topButtons = document.querySelectorAll('.top-button');
    const logoutButton = document.getElementById('logout-button'); // Находим кнопку "Выход"

    let currentLesson = 1;

    const taskContent = {
        1: {
            1: { html: '../task/task_1/task1/task1_1.html', css: 'task1_1.css' },
            2: { html: '../task/task_1/task2/task1_2.html', css: 'task1_2.css' },
            3: { html: '../task/task_1/task3/task1_3.html', css: 'task1_3.css' },
            4: { html: '../task/task_1/task4/task1_4.html', css: 'task1_4.css' },
            5: { html: '../task/task_1/task5/task1_5.html', css: 'task1_5.css' }
            // Добавьте остальные задания для урока 1
        },
        2: {
            1: { html: '../task/task_2/task1/task2_1.html', css: 'task1_1.css' },
            2: { html: '../task/task_2/task2/task2_2.html', css: 'task1_2.css' },
            3: { html: '../task/task_2/task3/task2_3.html', css: 'task1_3.css' },
            4: { html: '../task/task_2/task4/task2_4.html', css: 'task1_4.css' },
            5: { html: '../task/task_2/task5/task2_5.html', css: 'task1_5.css' }
            // Добавьте остальные задания для урока 2
        }
    };

    function clearLessonSelections() {
        lessons.forEach(l => l.classList.remove('selected'));
    }

    function clearTopButtonSelections() {
        topButtons.forEach(b => b.classList.remove('selected'));
    }

    function loadContent(url, cssFile) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('lesson-content').innerHTML = data;
                document.getElementById('lesson-style').href = cssFile;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function showLesson(lessonNumber) {
        clearLessonSelections();
        document.querySelector(`.lesson-list li:nth-child(${lessonNumber})`).classList.add('selected');
        currentLesson = lessonNumber;
        showTask(1); // Показываем первое задание для выбранного урока
    }

    function showTask(taskNumber) {
        clearTopButtonSelections();
        document.querySelector(`.top-button:nth-child(${taskNumber})`).classList.add('selected');
        const content = taskContent[currentLesson][taskNumber];
        loadContent(content.html, content.css);
    }

    showLesson(1); // Отображение первого урока и первого задания при загрузке

    topButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            showTask(index + 1);
        });
    });

    lessons.forEach((lesson, index) => {
        lesson.addEventListener('click', function() {
            showLesson(index + 1);
        });
    });

    // Обработчик для кнопки "Выход"
    logoutButton.addEventListener('click', function() {
        // Логика выхода, например, перенаправление на страницу выхода
        window.location.href = '../index.html';
    });
});
