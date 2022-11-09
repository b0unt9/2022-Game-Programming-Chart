
const colorGen = (cnt) =>  {
    let array = [];
    for (let i = 0; i < cnt; i++) {
        const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        const palette = Array(6)
            .fill()
            .map((v) => candidate[Math.floor(Math.random() * candidate.length)]);

        array.push(`#${palette.join('')}`);
    }
    return array;
}

const date = ['22/11/3','22/11/4','22/11/5','22/11/6','22/11/7','22/11/8'];


const chart1_data = [25717212, 25760661, 25801564, 25838239, 25856910, 25919183];

const chart1 = document.getElementById('chart1').getContext('2d');
const Chart1 = new Chart(chart1, {
    type: "line",
    data: {
        labels: date,
        datasets: [{
            label: '코로나 누적 확진자 통계',
            backgroundColor: colorGen(chart1_data.length),
            data: chart1_data
        }]
    },
});

const chart2_data = [29278, 29313, 29354, 29372, 29390, 29420];

const chart2 = document.getElementById('chart2').getContext('2d');
const Chart2 = new Chart(chart2, {
    type: "bar",
    data: {
        labels: date,
        datasets: [{
            label: '코로나 누적 사망자 통계',
            backgroundColor: colorGen(chart2_data.length),
            data: chart2_data
        }]
    },
    options: {
        scales: {
            y: {
                max: 30000,
                min: 25000,
            }
        }
    }
}, );

const chart3_labels = ['서울', '경남', '부산', '기타', '경기'];
const chart3_data = [19.5, 6.0, 5.9, 41.6, 27.0];

const chart3 = document.getElementById('chart3').getContext('2d');
const Chart3 = new Chart(chart3, {
    type: "doughnut",
    data: {
        labels: chart3_labels,
        datasets: [{
            label: '코로나 확진환자 지역별 비율',
            backgroundColor: colorGen(chart3_data.length),
            data: chart3_data
        }]
    },
});