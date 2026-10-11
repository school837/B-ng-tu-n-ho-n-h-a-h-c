const rawElements = [
[1,"H","Hiđro",1,1,"Phi kim",1.008],
[2,"He","Heli",1,18,"Khí hiếm",4.003],
[3,"Li","Liti",2,1,"Kim loại kiềm",6.94],
[4,"Be","Beri",2,2,"Kim loại kiềm thổ",9.012],
[5,"B","Bo",2,13,"Á kim",10.81],
[6,"C","Cacbon",2,14,"Phi kim",12.011],
[7,"N","Nitơ",2,15,"Phi kim",14.007],
[8,"O","Oxi",2,16,"Phi kim",15.999],
[9,"F","Flo",2,17,"Halogen",18.998],
[10,"Ne","Neon",2,18,"Khí hiếm",20.180],
[11,"Na","Natri",3,1,"Kim loại kiềm",22.990],
[12,"Mg","Magie",3,2,"Kim loại kiềm thổ",24.305],
[13,"Al","Nhôm",3,13,"Kim loại",26.982],
[14,"Si","Silic",3,14,"Á kim",28.085],
[15,"P","Photpho",3,15,"Phi kim",30.974],
[16,"S","Lưu huỳnh",3,16,"Phi kim",32.06],
[17,"Cl","Clo",3,17,"Halogen",35.45],
[18,"Ar","Argon",3,18,"Khí hiếm",39.948],
[19,"K","Kali",4,1,"Kim loại kiềm",39.098],
[20,"Ca","Canxi",4,2,"Kim loại kiềm thổ",40.078],
[21,"Sc","Scandi",4,3,"Kim loại chuyển tiếp",44.956],
[22,"Ti","Titan",4,4,"Kim loại chuyển tiếp",47.867],
[23,"V","Vanadi",4,5,"Kim loại chuyển tiếp",50.942],
[24,"Cr","Crom",4,6,"Kim loại chuyển tiếp",51.996],
[25,"Mn","Mangan",4,7,"Kim loại chuyển tiếp",54.938],
[26,"Fe","Sắt",4,8,"Kim loại chuyển tiếp",55.845],
[27,"Co","Coban",4,9,"Kim loại chuyển tiếp",58.933],
[28,"Ni","Niken",4,10,"Kim loại chuyển tiếp",58.693],
[29,"Cu","Đồng",4,11,"Kim loại chuyển tiếp",63.546],
[30,"Zn","Kẽm",4,12,"Kim loại chuyển tiếp",65.38],
[31,"Ga","Gali",4,13,"Kim loại",69.723],
[32,"Ge","Gecmani",4,14,"Á kim",72.630],
[33,"As","Asen",4,15,"Á kim",74.922],
[34,"Se","Selen",4,16,"Phi kim",78.971],
[35,"Br","Brom",4,17,"Halogen",79.904],
[36,"Kr","Krypton",4,18,"Khí hiếm",83.798],
[37,"Rb","Rubidi",5,1,"Kim loại kiềm",85.468],
[38,"Sr","Stronti",5,2,"Kim loại kiềm thổ",87.62],
[39,"Y","Ytri",5,3,"Kim loại chuyển tiếp",88.906],
[40,"Zr","Zirconi",5,4,"Kim loại chuyển tiếp",91.224],
[41,"Nb","Niobi",5,5,"Kim loại chuyển tiếp",92.906],
[42,"Mo","Molypden",5,6,"Kim loại chuyển tiếp",95.95],
[43,"Tc","Tecneti",5,7,"Kim loại chuyển tiếp",98],
[44,"Ru","Rutheni",5,8,"Kim loại chuyển tiếp",101.07],
[45,"Rh","Rhodi",5,9,"Kim loại chuyển tiếp",102.906],
[46,"Pd","Paladi",5,10,"Kim loại chuyển tiếp",106.42],
[47,"Ag","Bạc",5,11,"Kim loại chuyển tiếp",107.868],
[48,"Cd","Cadimi",5,12,"Kim loại chuyển tiếp",112.414],
[49,"In","Indi",5,13,"Kim loại",114.818],
[50,"Sn","Thiếc",5,14,"Kim loại",118.710],
[51,"Sb","Antimon",5,15,"Á kim",121.760],
[52,"Te","Teluri",5,16,"Á kim",127.60],
[53,"I","Iốt",5,17,"Halogen",126.904],
[54,"Xe","Xenon",5,18,"Khí hiếm",131.293],
[55,"Cs","Xesi",6,1,"Kim loại kiềm",132.905],
[56,"Ba","Bari",6,2,"Kim loại kiềm thổ",137.327],
[57,"La","Lantan",6,3,"Họ Lantan",138.905],
[58,"Ce","Xeri",6,4,"Họ Lantan",140.116],
[59,"Pr","Praseodymi",6,5,"Họ Lantan",140.908],
[60,"Nd","Neodymi",6,6,"Họ Lantan",144.242],
[61,"Pm","Promethi",6,7,"Họ Lantan",145],
[62,"Sm","Samari",6,8,"Họ Lantan",150.36],
[63,"Eu","Europi",6,9,"Họ Lantan",151.964],
[64,"Gd","Gadolini",6,10,"Họ Lantan",157.25],
[65,"Tb","Terbi",6,11,"Họ Lantan",158.925],
[66,"Dy","Dysprosi",6,12,"Họ Lantan",162.500],
[67,"Ho","Holmi",6,13,"Họ Lantan",164.930],
[68,"Er","Erbi",6,14,"Họ Lantan",167.259],
[69,"Tm","Thuli",6,15,"Họ Lantan",168.934],
[70,"Yb","Ytterbi",6,16,"Họ Lantan",173.045],
[71,"Lu","Luteti",6,17,"Họ Lantan",174.967],
[72,"Hf","Hafni",6,4,"Kim loại chuyển tiếp",178.49],
[73,"Ta","Tantan",6,5,"Kim loại chuyển tiếp",180.948],
[74,"W","Vonfram",6,6,"Kim loại chuyển tiếp",183.84],
[75,"Re","Rheni",6,7,"Kim loại chuyển tiếp",186.207],
[76,"Os","Osmi",6,8,"Kim loại chuyển tiếp",190.23],
[77,"Ir","Iridi",6,9,"Kim loại chuyển tiếp",192.217],
[78,"Pt","Platin",6,10,"Kim loại chuyển tiếp",195.084],
[79,"Au","Vàng",6,11,"Kim loại chuyển tiếp",196.967],
[80,"Hg","Thủy ngân",6,12,"Kim loại chuyển tiếp",200.592],
[81,"Tl","Tali",6,13,"Kim loại",204.38],
[82,"Pb","Chì",6,14,"Kim loại",207.2],
[83,"Bi","Bitmut",6,15,"Kim loại",208.980],
[84,"Po","Poloni",6,16,"Á kim",209],
[85,"At","Astatin",6,17,"Halogen",210],
[86,"Rn","Radon",6,18,"Khí hiếm",222],
[87,"Fr","Franxi",7,1,"Kim loại kiềm",223],
[88,"Ra","Radi",7,2,"Kim loại kiềm thổ",226],
[89,"Ac","Actini",7,3,"Họ Actini",227],
[90,"Th","Thori",7,4,"Họ Actini",232.038],
[91,"Pa","Protactini",7,5,"Họ Actini",231.036],
[92,"U","Urani",7,6,"Họ Actini",238.029],
[93,"Np","Neptuni",7,7,"Họ Actini",237],
[94,"Pu","Plutoni",7,8,"Họ Actini",244],
[95,"Am","Americi",7,9,"Họ Actini",243],
[96,"Cm","Curi",7,10,"Họ Actini",247],
[97,"Bk","Berkeli",7,11,"Họ Actini",247],
[98,"Cf","Californi",7,12,"Họ Actini",251],
[99,"Es","Einsteini",7,13,"Họ Actini",252],
[100,"Fm","Fermi",7,14,"Họ Actini",257],
[101,"Md","Mendelevi",7,15,"Họ Actini",258],
[102,"No","Nobeli",7,16,"Họ Actini",259],
[103,"Lr","Lawrenci",7,17,"Họ Actini",266],
[104,"Rf","Rutherfordi",7,4,"Kim loại chuyển tiếp",267],
[105,"Db","Dubni",7,5,"Kim loại chuyển tiếp",268],
[106,"Sg","Seaborgi",7,6,"Kim loại chuyển tiếp",269],
[107,"Bh","Bohri",7,7,"Kim loại chuyển tiếp",270],
[108,"Hs","Hassi",7,8,"Kim loại chuyển tiếp",269],
[109,"Mt","Meitneri",7,9,"Kim loại chuyển tiếp",278],
[110,"Ds","Darmstadti",7,10,"Kim loại chuyển tiếp",281],
[111,"Rg","Roentgeni",7,11,"Kim loại chuyển tiếp",282],
[112,"Cn","Copernixi",7,12,"Kim loại chuyển tiếp",285],
[113,"Nh","Nihoni",7,13,"Kim loại",286],
[114,"Fl","Flerovi",7,14,"Kim loại",289],
[115,"Mc","Moscovi",7,15,"Kim loại",290],
[116,"Lv","Livermori",7,16,"Kim loại",293],
[117,"Ts","Tennessine",7,17,"Halogen",294],
[118,"Og","Oganesson",7,18,"Khí hiếm",294]
];

const elements = rawElements.map(e => ({
    number: e[0],
    symbol: e[1],
    name: e[2],
    period: e[3],
    group: e[4],
    category: e[5],
    mass: e[6]
}));

const table = document.getElementById("periodicTable");
const lanthanides = document.getElementById("lanthanides");
const actinides = document.getElementById("actinides");
const details = document.getElementById("elementDetails");

const searchInput = document.getElementById("search");
const periodFilter = document.getElementById("periodFilter");
const categoryFilter = document.getElementById("categoryFilter");

let selectedNumber = null;

const categoryClasses = {
    "Kim loại kiềm": "alkali",
    "Kim loại kiềm thổ": "alkaline",
    "Kim loại chuyển tiếp": "transition",
    "Kim loại": "metal",
    "Á kim": "metalloid",
    "Phi kim": "nonmetal",
    "Halogen": "halogen",
    "Khí hiếm": "noble",
    "Họ Lantan": "lanthanide",
    "Họ Actini": "actinide"
};

const applications = {
    H: "Có trong nước và nhiều hợp chất hữu cơ; được sử dụng làm nguyên liệu trong công nghiệp hóa học.",
    He: "Dùng trong một số thiết bị làm lạnh, bóng bay chuyên dụng và nghiên cứu khoa học.",
    Li: "Được dùng trong pin lithium-ion và một số loại hợp kim.",
    C: "Là thành phần quan trọng của sinh vật; than chì được dùng trong ruột bút chì.",
    N: "Có trong không khí và được sử dụng để sản xuất phân đạm.",
    O: "Cần thiết cho hô hấp của nhiều sinh vật và hỗ trợ quá trình cháy.",
    Na: "Các hợp chất natri được sử dụng trong công nghiệp và đời sống.",
    Mg: "Dùng trong hợp kim nhẹ và pháo sáng chuyên dụng.",
    Al: "Dùng trong bao bì, dây dẫn và các kết cấu nhẹ.",
    Si: "Là vật liệu quan trọng trong sản xuất linh kiện bán dẫn và thủy tinh.",
    P: "Các hợp chất photpho được sử dụng trong phân bón.",
    S: "Được sử dụng để sản xuất axit sulfuric và một số hóa chất.",
    Cl: "Các hợp chất clo được dùng trong khử trùng nước và sản xuất hóa chất.",
    K: "Các hợp chất kali được dùng trong phân bón.",
    Ca: "Là thành phần quan trọng của xương, răng và vật liệu xây dựng.",
    Fe: "Được dùng rộng rãi để sản xuất thép và máy móc.",
    Cu: "Có tính dẫn điện tốt, được dùng trong dây điện và thiết bị điện.",
    Zn: "Được dùng để mạ bảo vệ sắt thép khỏi ăn mòn.",
    Ag: "Có tính dẫn điện cao và được dùng trong đồ trang sức, thiết bị chuyên dụng.",
    Au: "Được dùng trong trang sức và một số linh kiện điện tử.",
    Hg: "Từng được dùng trong nhiệt kế và một số thiết bị; cần tránh tiếp xúc vì độc tính.",
    U: "Được sử dụng làm nhiên liệu trong một số lò phản ứng hạt nhân."
};

function getElementByNumber(number) {
    return elements.find(e => e.number === number);
}

function makeElementCard(element, target, column, row) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "element " + (categoryClasses[element.category] || "metal");
    card.style.gridColumn = column;
    card.style.gridRow = row;
    card.dataset.number = element.number;
    card.setAttribute("aria-label", element.name + ", số hiệu " + element.number);

    card.innerHTML = `
        <span class="number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${element.name}</span>
    `;

    card.addEventListener("click", () => showDetails(element.number));
    target.appendChild(card);
}

function drawTable() {
    table.innerHTML = "";
    lanthanides.innerHTML = "";
    actinides.innerHTML = "";

    elements.forEach(element => {
        if (element.category === "Họ Lantan") {
            makeElementCard(element, lanthanides, element.number - 56, 1);
        } else if (element.category === "Họ Actini") {
            makeElementCard(element, actinides, element.number - 88, 1);
        } else {
            makeElementCard(element, table, element.group, element.period);
        }
    });

    applyFilters();
}

function showDetails(number) {
    const element = getElementByNumber(number);
    if (!element) return;

    selectedNumber = number;

    document.querySelectorAll(".element").forEach(card => {
        card.classList.toggle(
            "selected",
            Number(card.dataset.number) === number
        );
    });

    const colorClass = categoryClasses[element.category] || "metal";
    const electronConfig = getElectronConfiguration(element.number);
    const applicationsText = applications[element.symbol] ||
        "Được sử dụng trong nghiên cứu khoa học hoặc các ứng dụng công nghiệp chuyên biệt.";

    details.innerHTML = `
        <div class="detail-top">
            <div class="detail-symbol ${colorClass}">${element.symbol}</div>
            <div>
                <h2>${element.name} (${element.symbol})</h2>
                <p>Nguyên tố số ${element.number} trong bảng tuần hoàn</p>
            </div>
        </div>
        <div class="detail-grid">
            <div class="detail-item">
                <strong>Số hiệu nguyên tử</strong>
                ${element.number}
            </div>
            <div class="detail-item">
                <strong>Nguyên tử khối tương đối</strong>
                ${element.mass}
            </div>
            <div class="detail-item">
                <strong>Chu kì</strong>
                ${element.period}
            </div>
            <div class="detail-item">
                <strong>Nhóm</strong>
                ${element.group}
            </div>
            <div class="detail-item">
                <strong>Phân loại</strong>
                ${element.category}
            </div>
            <div class="detail-item">
                <strong>Cấu hình electron rút gọn</strong>
                ${electronConfig}
            </div>
        </div>
        <div class="info-card">
            <h3>Ứng dụng và vai trò</h3>
            <p>${applicationsText}</p>
        </div>
        <div class="info-card">
            <h3>Phân tử hoặc hợp chất minh họa</h3>
            ${getMoleculeIllustration(element)}
        </div>
    `;

    details.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getElectronConfiguration(number) {
    const shells = [2, 8, 18, 32, 32, 18, 8];
    let remaining = number;
    const result = [];

    for (const capacity of shells) {
        if (remaining <= 0) break;
        const count = Math.min(remaining, capacity);
        result.push(count);
        remaining -= count;
    }

    return result.join(" - ");
}

function getMoleculeIllustration(element) {
    const molecules = {
        H: ["H₂", "Khí hiđro"],
        O: ["O₂", "Khí oxi"],
        N: ["N₂", "Khí nitơ"],
        Cl: ["Cl₂", "Khí clo"],
        H2O: ["H₂O", "Nước"],
        C: ["CO₂", "Cacbon đioxit"],
        Na: ["NaCl", "Natri clorua"],
        Mg: ["MgO", "Magie oxit"],
        Al: ["Al₂O₃", "Nhôm oxit"],
        Si: ["SiO₂", "Silic đioxit"],
        P: ["H₃PO₄", "Axit photphoric"],
        S: ["SO₃", "Lưu huỳnh trioxit"],
        Ca: ["CaCO₃", "Canxi cacbonat"],
        Fe: ["Fe₂O₃", "Sắt(III) oxit"],
        Cu: ["CuO", "Đồng(II) oxit"],
        K: ["KOH", "Kali hiđroxit"],
        Li: ["LiOH", "Liti hiđroxit"]
    };

    const item = molecules[element.symbol];

    if (!item) {
        return `
            <p><strong>${element.symbol}</strong> là ký hiệu hóa học của ${element.name}.</p>
        `;
    }

    return `
        <div class="molecule">
            <div class="molecule-formula">${item[0]}</div>
            <p>${item[1]}</p>
            <p class="molecule-note">Công thức minh họa của một phân tử hoặc hợp chất có chứa nguyên tố này.</p>
        </div>
    `;
}

function applyFilters() {
    const keyword = searchInput.value.trim().toLowerCase();
    const period = periodFilter.value;
    const category = categoryFilter.value;

    document.querySelectorAll(".element").forEach(card => {
        const element = getElementByNumber(Number(card.dataset.number));

        const matchesKeyword =
            element.name.toLowerCase().includes(keyword) ||
            element.symbol.toLowerCase().includes(keyword) ||
            String(element.number).includes(keyword);

        const matchesPeriod = !period ||
            String(element.period) === period;

        const matchesCategory = !category ||
            element.category === category;

        card.style.display =
            matchesKeyword && matchesPeriod && matchesCategory
                ? ""
                : "none";
    });
}

searchInput.addEventListener("input", applyFilters);
periodFilter.addEventListener("change", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

document.getElementById("resetFilters").addEventListener("click", () => {
    searchInput.value = "";
    periodFilter.value = "";
    categoryFilter.value = "";
    applyFilters();
});

document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(tab => {
            tab.classList.remove("active");
        });

        document.querySelectorAll(".view").forEach(view => {
            view.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(button.dataset.view).classList.add("active");
    });
});

const questions = [
    {
        q: "Nguyên tố nào có oxit cao nhất là SiO₂?",
        options: ["Na", "Si", "Mg", "Al"],
        answer: 1,
        explain: "Silic thuộc nhóm IVA, có oxit cao nhất thường viết là SiO₂."
    },
    {
        q: "Công thức hiđroxit của liti là gì?",
        options: ["LiOH", "Li₂O", "Li(OH)₂", "HLiO"],
        answer: 0,
        explain: "Liti thuộc nhóm IA và tạo hiđroxit LiOH."
    },
    {
        q: "Oxit cao nhất R₂O₇ thường tương ứng với axit nào?",
        options: ["H₂RO₃", "H₃RO₄", "HRO₄", "H₂RO₄"],
        answer: 2,
        explain: "Ví dụ Cl₂O₇ tương ứng với axit HClO₄."
    },
    {
        q: "Axit tương ứng với oxit cao nhất P₂O₅ là gì?",
        options: ["H₃PO₃", "HPO₃", "H₄P₂O₇", "H₃PO₄"],
        answer: 3,
        explain: "P₂O₅ kết hợp với nước có thể tạo thành H₃PO₄."
    },
    {
        q: "X có cấu hình electron lớp ngoài cùng 3s²3p⁴. Oxit cao nhất là gì?",
        options: ["X₂O", "XO₃", "X₂O₃", "XO₂"],
        answer: 1,
        explain: "X là lưu huỳnh, oxit cao nhất thường gặp là SO₃."
    },
    {
        q: "R tạo RH₃ và oxit cao nhất R₂O₅. Axit tương ứng có công thức nào?",
        options: ["H₂RO₃", "H₃RO₄", "HRO₃", "H₂RO₄"],
        answer: 1,
        explain: "Ví dụ photpho tạo H₃PO₄ tương ứng với P₂O₅."
    },
    {
        q: "R thuộc nhóm IIA, oxit RO có 28,57% oxi theo khối lượng. R là gì? (O = 16)",
        options: ["Mg", "Ca", "Ba", "Be"],
        answer: 1,
        explain: "16/(Mᵣ + 16) × 100% = 28,57%, suy ra Mᵣ xấp xỉ 40. R là Ca."
    },
    {
        q: "Oxit cao nhất XO₃. Hiđrua H₂X chứa 5,88% H theo khối lượng. X là gì?",
        options: ["O", "S", "C", "N"],
        answer: 1,
        explain: "2/(Mᵣ + 2) × 100% = 5,88%, suy ra Mᵣ xấp xỉ 32. X là S."
    },
    {
        q: "Dãy nào có tính bazơ giảm dần?",
        options: [
            "NaOH > Mg(OH)₂ > Al(OH)₃ > H₂SiO₃",
            "H₂SiO₃ > Al(OH)₃ > Mg(OH)₂ > NaOH",
            "Al(OH)₃ > NaOH > H₂SiO₃ > Mg(OH)₂",
            "Mg(OH)₂ > H₂SiO₃ > NaOH > Al(OH)₃"
        ],
        answer: 0,
        explain: "Trong chu kì 3, tính bazơ nhìn chung giảm dần từ NaOH đến Mg(OH)₂ và Al(OH)₃; H₂SiO₃ là axit yếu."
    },
    {
        q: "R₂O₇ tương ứng với axit HRO₄ có phân tử khối 100,5. R là gì?",
        options: ["Cl", "Br", "I", "F"],
        answer: 0,
        explain: "M(R) = 100,5 - 1 - 64 = 35,5. Đó là clo."
    }
];

const kahootGame = document.getElementById("kahootGame");
const kahootEnd = document.getElementById("kahootEnd");
const kahootQuestion = document.getElementById("kahootQuestion");
const kahootOptions = document.getElementById("kahootOptions");
const kahootFeedback = document.getElementById("kahootFeedback");
const kahootScore = document.getElementById("kahootScore");
const questionCount = document.getElementById("questionCount");
const timerText = document.getElementById("timerText");
const progressBar = document.getElementById("progressBar");
const nextQuestion = document.getElementById("nextQuestion");

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
let answered = false;
let questionPoints = 0;
const kahootStart = document.getElementById("kahootStart");
const playerNameInput = document.getElementById("playerName");
const playerClassInput = document.getElementById("playerClass");
const startError = document.getElementById("startError");

let playerName = "";
let playerClass = "";
let correctCount = 0;
function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function startTimer() {
    stopTimer();
    timeLeft = 20;
    timerText.textContent = "⏱ " + timeLeft + " giây";

    timer = setInterval(() => {
        timeLeft--;
        timerText.textContent = "⏱ " + timeLeft + " giây";

        if (timeLeft <= 0) {
            stopTimer();

            if (!answered) {
                answered = true;
                showAnswer(-1);
                kahootFeedback.textContent =
                    "⏰ Hết giờ! Đáp án đúng là " +
                    String.fromCharCode(65 + questions[currentQuestion].answer) + ".";
                nextQuestion.hidden = false;
            }
        }
    }, 1000);
}

function renderKahootQuestion() {
    stopTimer();

    if (currentQuestion >= questions.length) {
        showFinalResult();
        return;
    }

    answered = false;
    questionPoints = 0;

    const question = questions[currentQuestion];

    kahootStart.hidden = true;
    kahootGame.hidden = false;
    kahootEnd.hidden = true;
    nextQuestion.hidden = true;

    questionCount.textContent =
        "Câu " + (currentQuestion + 1) + "/" + questions.length;

    progressBar.style.width =
        (currentQuestion / questions.length * 100) + "%";

    kahootQuestion.textContent = question.q;
    kahootFeedback.textContent = "";
    kahootOptions.innerHTML = "";

    const shapes = ["▲", "◆", "●", "■"];

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "kahoot-option";

        const shape = document.createElement("span");
        shape.className = "answer-shape";
        shape.textContent = shapes[index];

        const text = document.createElement("span");
        text.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        button.appendChild(shape);
        button.appendChild(text);

        button.addEventListener("click", () => {
            if (answered) return;

            answered = true;
            stopTimer();

            if (index === question.answer) {
                correctCount++;
                questionPoints = 1000 + timeLeft * 50;
                score += questionPoints;
                kahootScore.textContent = score.toLocaleString("vi-VN");

                kahootFeedback.textContent =
                    "✅ Chính xác! +" + questionPoints + " điểm";
            } else {
                kahootFeedback.textContent =
                    "❌ Chưa đúng! " + question.explain;
            }

            showAnswer(index);
            nextQuestion.hidden = false;
        });

        kahootOptions.appendChild(button);
    });

    startTimer();
}

function showAnswer(chosenIndex) {
    const question = questions[currentQuestion];
    const buttons = kahootOptions.querySelectorAll(".kahoot-option");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.answer) {
            button.classList.add("correct-answer");
        } else if (index === chosenIndex) {
            button.classList.add("wrong-answer");
        }
    });

    if (chosenIndex === -1) {
        kahootFeedback.textContent =
            "⏰ Hết giờ! Đáp án đúng: " +
            String.fromCharCode(65 + question.answer) + ". " +
            question.options[question.answer] + ". " + question.explain;
    }
}

function showFinalResult() {
    stopTimer();

    kahootGame.hidden = true;
    kahootStart.hidden = true;
    kahootEnd.hidden = false;

    progressBar.style.width = "100%";
    questionCount.textContent = "Đã hoàn thành " + questions.length + " câu";
    timerText.textContent = "🏁 Kết thúc";

    document.getElementById("finalPlayer").textContent =
        "👤 Người chơi: " + playerName + " | Lớp: " + playerClass;

    document.getElementById("finalScore").textContent =
        "⭐ Tổng điểm: " + score.toLocaleString("vi-VN");

    document.getElementById("finalCorrect").textContent =
        "✅ Số câu đúng: " + correctCount + "/" + questions.length;

    let message = "";

    if (correctCount >= 9) {
        message = "Xuất sắc! Bạn nắm kiến thức rất tốt.";
    } else if (correctCount >= 7) {
        message = "Rất tốt! Hãy tiếp tục phát huy nhé.";
    } else if (correctCount >= 5) {
        message = "Khá tốt! Ôn thêm một chút là sẽ tiến bộ.";
    } else {
        message = "Đừng nản chí! Hãy xem lại lời giải và thử lần nữa.";
    }

    document.getElementById("finalMessage").textContent = message;
}
drawTable();
document.getElementById("startQuiz").addEventListener("click", () => {
    playerName = playerNameInput.value.trim();
    playerClass = playerClassInput.value.trim();

    if (!playerName || !playerClass) {
        startError.textContent = "Bạn hãy nhập đầy đủ tên và lớp nhé!";
        return;
    }

    startError.textContent = "";
    currentQuestion = 0;
    score = 0;
    correctCount = 0;

    kahootScore.textContent = "0";
    renderKahootQuestion();
});

document.getElementById("playAgain").addEventListener("click", () => {
    stopTimer();

    currentQuestion = 0;
    score = 0;
    correctCount = 0;

    kahootScore.textContent = "0";
    kahootEnd.hidden = true;
    kahootGame.hidden = true;
    kahootStart.hidden = false;

    playerNameInput.value = playerName;
    playerClassInput.value = playerClass;
    startError.textContent = "";
});
nextQuestion.addEventListener("click", () => {
    currentQuestion++;
    renderKahootQuestion();
});