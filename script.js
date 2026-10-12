const rawElements = [
[1,"H","Hydrogen",1,1,"Phi kim",1.008],
[2,"He","Helium",1,18,"Khí hiếm",4.003],
[3,"Li","Lithium",2,1,"Kim loại kiềm",6.94],
[4,"Be","Beryllium",2,2,"Kim loại kiềm thổ",9.012],
[5,"B","Boron",2,13,"Á kim",10.81],
[6,"C","Carbon",2,14,"Phi kim",12.011],
[7,"N","Nitrogen",2,15,"Phi kim",14.007],
[8,"O","Oxygen",2,16,"Phi kim",15.999],
[9,"F","Fluorine",2,17,"Halogen",18.998],
[10,"Ne","Neon",2,18,"Khí hiếm",20.180],
[11,"Na","Sodium",3,1,"Kim loại kiềm",22.990],
[12,"Mg","Magnesium",3,2,"Kim loại kiềm thổ",24.305],
[13,"Al","Aluminium",3,13,"Kim loại",26.982],
[14,"Si","Silicon",3,14,"Á kim",28.085],
[15,"P","Phosphorus",3,15,"Phi kim",30.974],
[16,"S","Sulfur",3,16,"Phi kim",32.06],
[17,"Cl","Chlorine",3,17,"Halogen",35.45],
[18,"Ar","Argon",3,18,"Khí hiếm",39.948],
[19,"K","Potassium",4,1,"Kim loại kiềm",39.098],
[20,"Ca","Calcium",4,2,"Kim loại kiềm thổ",40.078],
[21,"Sc","Scandium",4,3,"Kim loại chuyển tiếp",44.956],
[22,"Ti","Titanium",4,4,"Kim loại chuyển tiếp",47.867],
[23,"V","Vanadium",4,5,"Kim loại chuyển tiếp",50.942],
[24,"Cr","Chromium",4,6,"Kim loại chuyển tiếp",51.996],
[25,"Mn","Manganese",4,7,"Kim loại chuyển tiếp",54.938],
[26,"Fe","Iron",4,8,"Kim loại chuyển tiếp",55.845],
[27,"Co","Cobalt",4,9,"Kim loại chuyển tiếp",58.933],
[28,"Ni","Nickel",4,10,"Kim loại chuyển tiếp",58.693],
[29,"Cu","Copper",4,11,"Kim loại chuyển tiếp",63.546],
[30,"Zn","Zinc",4,12,"Kim loại chuyển tiếp",65.38],
[31,"Ga","Gallium",4,13,"Kim loại",69.723],
[32,"Ge","Germanium",4,14,"Á kim",72.630],
[33,"As","Arsenic",4,15,"Á kim",74.922],
[34,"Se","Selenium",4,16,"Phi kim",78.971],
[35,"Br","Bromine",4,17,"Halogen",79.904],
[36,"Kr","Krypton",4,18,"Khí hiếm",83.798],
[37,"Rb","Rubidium",5,1,"Kim loại kiềm",85.468],
[38,"Sr","Strontium",5,2,"Kim loại kiềm thổ",87.62],
[39,"Y","Yttrium",5,3,"Kim loại chuyển tiếp",88.906],
[40,"Zr","Zirconium",5,4,"Kim loại chuyển tiếp",91.224],
[41,"Nb","Niobium",5,5,"Kim loại chuyển tiếp",92.906],
[42,"Mo","Molybdenum",5,6,"Kim loại chuyển tiếp",95.95],
[43,"Tc","Technetium",5,7,"Kim loại chuyển tiếp",98],
[44,"Ru","Ruthenium",5,8,"Kim loại chuyển tiếp",101.07],
[45,"Rh","Rhodium",5,9,"Kim loại chuyển tiếp",102.906],
[46,"Pd","Palladium",5,10,"Kim loại chuyển tiếp",106.42],
[47,"Ag","Silver",5,11,"Kim loại chuyển tiếp",107.868],
[48,"Cd","Cadmium",5,12,"Kim loại chuyển tiếp",112.414],
[49,"In","Indium",5,13,"Kim loại",114.818],
[50,"Sn","Tin",5,14,"Kim loại",118.710],
[51,"Sb","Antimony",5,15,"Á kim",121.760],
[52,"Te","Tellurium",5,16,"Á kim",127.60],
[53,"I","Iodine",5,17,"Halogen",126.904],
[54,"Xe","Xenon",5,18,"Khí hiếm",131.293],
[55,"Cs","Caesium",6,1,"Kim loại kiềm",132.905],
[56,"Ba","Barium",6,2,"Kim loại kiềm thổ",137.327],
[57,"La","Lanthanum",6,3,"Họ Lantan",138.905],
[58,"Ce","Cerium",6,4,"Họ Lantan",140.116],
[59,"Pr","Praseodymium",6,5,"Họ Lantan",140.908],
[60,"Nd","Neodymium",6,6,"Họ Lantan",144.242],
[61,"Pm","Promethium",6,7,"Họ Lantan",145],
[62,"Sm","Samarium",6,8,"Họ Lantan",150.36],
[63,"Eu","Europium",6,9,"Họ Lantan",151.964],
[64,"Gd","Gadolinium",6,10,"Họ Lantan",157.25],
[65,"Tb","Terbium",6,11,"Họ Lantan",158.925],
[66,"Dy","Dysprosium",6,12,"Họ Lantan",162.500],
[67,"Ho","Holmium",6,13,"Họ Lantan",164.930],
[68,"Er","Erbium",6,14,"Họ Lantan",167.259],
[69,"Tm","Thulium",6,15,"Họ Lantan",168.934],
[70,"Yb","Ytterbium",6,16,"Họ Lantan",173.045],
[71,"Lu","Lutetium",6,17,"Họ Lantan",174.967],
[72,"Hf","Hafnium",6,4,"Kim loại chuyển tiếp",178.49],
[73,"Ta","Tantalum",6,5,"Kim loại chuyển tiếp",180.948],
[74,"W","Tungsten",6,6,"Kim loại chuyển tiếp",183.84],
[75,"Re","Rhenium",6,7,"Kim loại chuyển tiếp",186.207],
[76,"Os","Osmium",6,8,"Kim loại chuyển tiếp",190.23],
[77,"Ir","Iridium",6,9,"Kim loại chuyển tiếp",192.217],
[78,"Pt","Platinum",6,10,"Kim loại chuyển tiếp",195.084],
[79,"Au","Gold",6,11,"Kim loại chuyển tiếp",196.967],
[80,"Hg","Mercury",6,12,"Kim loại chuyển tiếp",200.592],
[81,"Tl","Thallium",6,13,"Kim loại",204.38],
[82,"Pb","Lead",6,14,"Kim loại",207.2],
[83,"Bi","Bismuth",6,15,"Kim loại",208.980],
[84,"Po","Polonium",6,16,"Á kim",209],
[85,"At","Astatine",6,17,"Halogen",210],
[86,"Rn","Radon",6,18,"Khí hiếm",222],
[87,"Fr","Francium",7,1,"Kim loại kiềm",223],
[88,"Ra","Radium",7,2,"Kim loại kiềm thổ",226],
[89,"Ac","Actinium",7,3,"Họ Actini",227],
[90,"Th","Thorium",7,4,"Họ Actini",232.038],
[91,"Pa","Protactinium",7,5,"Họ Actini",231.036],
[92,"U","Uranium",7,6,"Họ Actini",238.029],
[93,"Np","Neptunium",7,7,"Họ Actini",237],
[94,"Pu","Plutonium",7,8,"Họ Actini",244],
[95,"Am","Americium",7,9,"Họ Actini",243],
[96,"Cm","Curium",7,10,"Họ Actini",247],
[97,"Bk","Berkelium",7,11,"Họ Actini",247],
[98,"Cf","Californium",7,12,"Họ Actini",251],
[99,"Es","Einsteinium",7,13,"Họ Actini",252],
[100,"Fm","Fermium",7,14,"Họ Actini",257],
[101,"Md","Mendelevium",7,15,"Họ Actini",258],
[102,"No","Nobelium",7,16,"Họ Actini",259],
[103,"Lr","Lawrencium",7,17,"Họ Actini",266],
[104,"Rf","Rutherfordium",7,4,"Kim loại chuyển tiếp",267],
[105,"Db","Dubnium",7,5,"Kim loại chuyển tiếp",268],
[106,"Sg","Seaborgium",7,6,"Kim loại chuyển tiếp",269],
[107,"Bh","Bohrium",7,7,"Kim loại chuyển tiếp",270],
[108,"Hs","Hassium",7,8,"Kim loại chuyển tiếp",269],
[109,"Mt","Meitnerium",7,9,"Kim loại chuyển tiếp",278],
[110,"Ds","Darmstadtium",7,10,"Kim loại chuyển tiếp",281],
[111,"Rg","Roentgenium",7,11,"Kim loại chuyển tiếp",282],
[112,"Cn","Copernicium",7,12,"Kim loại chuyển tiếp",285],
[113,"Nh","Nihonium",7,13,"Kim loại",286],
[114,"Fl","Flerovium",7,14,"Kim loại",289],
[115,"Mc","Moscovium",7,15,"Kim loại",290],
[116,"Lv","Livermorium",7,16,"Kim loại",293],
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
    S: "Được sử dụng để sản xuất acid sulfuric và một số hóa chất.",
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

    // 1. Tạo 2 ô đại diện giữ chỗ trên bảng tuần hoàn chính (Cột 3, Chu kì 6 và 7)
    // Ô đại diện Họ Lantan
    const laPlaceholder = document.createElement("div");
    laPlaceholder.className = "element lanthanide";
    laPlaceholder.style.gridColumn = 3;
    laPlaceholder.style.gridRow = 6;
    laPlaceholder.innerHTML = `
        <span class="number" style="font-size:8px;">57-71</span>
        <span class="symbol" style="font-size:18px;">La-Lu</span>
        <span class="name" style="font-size:8px;">Lanthanides</span>
    `;
    table.appendChild(laPlaceholder);

    // Ô đại diện Họ Actini
    const acPlaceholder = document.createElement("div");
    acPlaceholder.className = "element actinide";
    acPlaceholder.style.gridColumn = 3;
    acPlaceholder.style.gridRow = 7;
    acPlaceholder.innerHTML = `
        <span class="number" style="font-size:8px;">89-103</span>
        <span class="symbol" style="font-size:18px;">Ac-Lr</span>
        <span class="name" style="font-size:8px;">Actinides</span>
    `;
    table.appendChild(acPlaceholder);

    // 2. Phân bổ các nguyên tố thực tế vào đúng vị trí
    elements.forEach(element => {
        if (element.number >= 57 && element.number <= 71) {
            const targetColumn = element.number - 56;
            makeElementCard(element, lanthanides, targetColumn, 1);
            const card = lanthanides.querySelector(`[data-number="${element.number}"]`);
            if (card) card.style.display = "block";
            
        } else if (element.number >= 89 && element.number <= 103) {
            const targetColumn = element.number - 88;
            makeElementCard(element, actinides, targetColumn, 1);
            const card = actinides.querySelector(`[data-number="${element.number}"]`);
            if (card) card.style.display = "block";
            
        } else {
            // Các nguyên tố khác giữ nguyên vị trí cũ
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
        H: ["H₂", "Hydrogen gas"],
        O: ["O₂", "Oxygen gas"],
        N: ["N₂", "Nitrogen gas"],
Cl: ["Cl₂", "Chlorine gas"],
H2O: ["H₂O", "Water"],
C: ["CO₂", "Carbon dioxide"],
Na: ["NaCl", "Sodium chloride"],
Mg: ["MgO", "Magnesium oxide"],
Al: ["Al₂O₃", "Aluminium oxide"],
Si: ["SiO₂", "Silicon dioxide"],
P: ["H₃PO₄", "Phosphoric acid"],
S: ["SO₃", "Sulfur trioxide"],
Ca: ["CaCO₃", "Calcium carbonate"],
Fe: ["Fe₂O₃", "Iron(III) oxide"],
Cu: ["CuO", "Copper(II) oxide"],
K: ["KOH", "Potassium hydroxide"],
Li: ["LiOH", "Lithium hydroxide"]
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
        const number = card.dataset.number;

        if (!number) {
            const isLanthanide = card.classList.contains("lanthanide");
            const isActinide = card.classList.contains("actinide");

            const matchesPeriod = !period ||
                (isLanthanide && period === "6") ||
                (isActinide && period === "7");

            const matchesCategory = !category ||
                (isLanthanide && category === "Họ Lantan") ||
                (isActinide && category === "Họ Actini");

            const matchesKeyword =
                card.textContent.toLowerCase().includes(keyword);

            card.style.display =
                matchesPeriod && matchesCategory && matchesKeyword
                    ? ""
                    : "none";

            return;
        }

        const element = getElementByNumber(Number(number));
        if (!element) return;

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
        q: "Oxit cao nhất R₂O₇ thường tương ứng với acid nào?",
        options: ["H₂RO₃", "H₃RO₄", "HRO₄", "H₂RO₄"],
        answer: 2,
        explain: "Ví dụ Cl₂O₇ tương ứng với acid HClO₄."
    },
    {
        q: "Acid tương ứng với oxit cao nhất P₂O₅ là gì?",
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
        q: "R tạo RH₃ và oxit cao nhất R₂O₅. Acid tương ứng có công thức nào?",
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
        q: "Dãy nào có tính base giảm dần?",
        options: [
            "NaOH > Mg(OH)₂ > Al(OH)₃ > H₂SiO₃",
            "H₂SiO₃ > Al(OH)₃ > Mg(OH)₂ > NaOH",
            "Al(OH)₃ > NaOH > H₂SiO₃ > Mg(OH)₂",
            "Mg(OH)₂ > H₂SiO₃ > NaOH > Al(OH)₃"
        ],
        answer: 0,
        explain: "Trong chu kì 3, tính base nhìn chung giảm dần từ NaOH đến Mg(OH)₂ và Al(OH)₃; H₂SiO₃ là acid yếu."
    },
    {
        q: "R₂O₇ tương ứng với acid HRO₄ có phân tử khối 100,5. R là gì?",
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
