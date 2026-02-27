let questions = [
    {
        "question": "Wofür steht die Abkürzung HTML?",
        "answer_1": "Hyperlinks and Text Markup Language",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Home Tool Markup Language",
        "answer_4": "High Text Machine Language",
        "right_answer": 2
    },
    {
        "question": "Welches HTML-Element definiert die größte Überschrift?",
        "answer_1": "<h6>",
        "answer_2": "<heading>",
        "answer_3": "<h1>",
        "answer_4": "<head>",
        "right_answer": 3
    },
    {
        "question": "Welches Attribut wird verwendet, um ein Bild in HTML einzubinden?",
        "answer_1": "src",
        "answer_2": "href",
        "answer_3": "link",
        "answer_4": "path",
        "right_answer": 1
    },
    {
        "question": "Welches HTML-Element wird für ungeordnete Listen verwendet?",
        "answer_1": "<ol>",
        "answer_2": "<ul>",
        "answer_3": "<li>",
        "answer_4": "<list>",
        "right_answer": 2
    },
    {
        "question": "Welches Element enthält Metadaten über das HTML-Dokument?",
        "answer_1": "<meta>",
        "answer_2": "<header>",
        "answer_3": "<body>",
        "answer_4": "<head>",
        "right_answer": 4
    },
    {
        "question": "Welches HTML-Element wird verwendet, um einen Hyperlink zu erstellen?",
        "answer_1": "<link>",
        "answer_2": "<a>",
        "answer_3": "<href>",
        "answer_4": "<nav>",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut wird verwendet, um einen Link in einem neuen Tab zu öffnen?",
        "answer_1": "new",
        "answer_2": "tabindex",
        "answer_3": "target",
        "answer_4": "window",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Element wird für Tabellenzeilen verwendet?",
        "answer_1": "<td>",
        "answer_2": "<th>",
        "answer_3": "<tr>",
        "answer_4": "<table-row>",
        "right_answer": 3
    },
    {
        "question": "Welches HTML5-Element repräsentiert eigenständigen, in sich geschlossenen Inhalt?",
        "answer_1": "<section>",
        "answer_2": "<div>",
        "answer_3": "<article>",
        "answer_4": "<span>",
        "right_answer": 3
    },
    {
        "question": "Welches HTML-Element wird verwendet, um ein Formular zu definieren?",
        "answer_1": "<input>",
        "answer_2": "<form>",
        "answer_3": "<fieldset>",
        "answer_4": "<label>",
        "right_answer": 2
    }
];

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
    showQuestion();
}

let currentQuestion = 0;

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('question').textContent = 'Herzlichen Glückwunsch! Quiz beendet!';
        document.getElementById('answer_1').textContent = '';
        document.getElementById('answer_2').textContent = '';
        document.getElementById('answer_3').textContent = '';
        document.getElementById('answer_4').textContent = '';
        return;
    }

    document.getElementById('question').textContent = question['question'];
    document.getElementById('answer_1').textContent = question['answer_1'];
    document.getElementById('answer_2').textContent = question['answer_2'];
    document.getElementById('answer_3').textContent = question['answer_3'];
    document.getElementById('answer_4').textContent = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);
    
    let idOfRightAnswer = 'answer_' + question['right_answer'];

    if (selectedQuestionNumber == question['right_answer']) {        
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    document.getElementById('next-button').disabled = true;
    init();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger');
}