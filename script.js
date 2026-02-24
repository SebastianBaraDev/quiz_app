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
    document.getElementById('currentQuestion').innerHTML = questionIndex + 1;
        showQuestion();
        showAnswers();
}

let questionIndex = 0;

function showQuestion() {
    document.getElementById('question').innerHTML = questions[questionIndex]['question'];
}

function showAnswers() {
    document.getElementById('answer_1').innerHTML = questions[questionIndex]['answer_1'];
    document.getElementById('answer_2').innerHTML = questions[questionIndex]['answer_2'];
    document.getElementById('answer_3').innerHTML = questions[questionIndex]['answer_3'];
    document.getElementById('answer_4').innerHTML = questions[questionIndex]['answer_4'];
}

function nextQuestion() {
    questionIndex++;
    showQuestion();
    showAnswers();

    document.getElementById('card_1').classList.remove('bg-success', 'bg-failure');
    document.getElementById('card_2').classList.remove('bg-success', 'bg-failure');
    document.getElementById('card_3').classList.remove('bg-success', 'bg-failure');
    document.getElementById('card_4').classList.remove('bg-success', 'bg-failure');
}

function answer(selection) {
    let right_answer = questions[questionIndex]['right_answer'];

    if (selection == right_answer) {
        document.getElementById('card_' + selection).classList.add('bg-success');
    } else {
        document.getElementById('card_' + selection).classList.add('bg-failure');
    }
}
