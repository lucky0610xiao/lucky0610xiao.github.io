document.addEventListener("DOMContentLoaded", function() {
    // 假设这里是从服务器获取的行政区划、人口数据和经济数据
    const adminData = [
        { district: "区域1", population: 100000, gdp: 500000 },
        { district: "区域2", population: 150000, gdp: 700000 },
        // 添加更多行政区划数据
    ];

    const populationData = [
        { district: "2017年", population: 305.33 },
        { district: "2018年", population: 299.36 },
        { district: "2019年", population: 301.50 },
        { district: "2020年", population: 267.28 }, 
        { district: "2021年", population: 268.69 },
        { district: "2022年", population: 268.26 },
        // 添加更多人口数据
    ];

    const economicData = [
        { district: "2017年", gdp: 855.37 },
        { district: "2018年", gdp: 920.32 },
        { district: "2019年", gdp: 1080.3 },
        { district: "2020年", gdp: 1123.81 },
        { district: "2021年", gdp: 1288.04 },
        { district: "2022年", gdp: 1322.02 },
        // 添加更多经济数据
    ];

    
    // 使用 Chart.js 绘制人口数据柱状图
    var populationChart = new Chart(document.getElementById('population-chart'), {
        type: 'bar',
        data: {
            labels: populationData.map(data => data.district),
            datasets: [{
                label: '人口数据',
                data: populationData.map(data => data.population),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 12,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // 使用 Chart.js 绘制经济数据柱状图
    var economicChart = new Chart(document.getElementById('economic-chart'), {
        type: 'bar',
        data: {
            labels: economicData.map(data => data.district),
            datasets: [{
                label: '经济数据',
                data: economicData.map(data => data.gdp),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 12,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // 更新柱状图的样式
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.style.width = '10%'; // 设置柱状图容器宽度为页面的一半
        container.style.margin = '0 auto'; // 居中显示
    });
    
    // 调整柱形图的宽度
   // 调整柱形图的宽度
populationChart.options.scales.xAxes[0].barPercentage = 0.5;
populationChart.options.scales.xAxes[0].categoryPercentage = 0.8;

economicChart.options.scales.xAxes[0].barPercentage = 0.5;
economicChart.options.scales.xAxes[0].categoryPercentage = 0.8;


const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const totalImages = images.length;
let currentIndex = 0;

// 显示当前图片
function showImage(index) {
    // 隐藏所有图片
    for (let i = 0; i < totalImages; i++) {
        images[i].style.display = 'none';
    }
    // 显示当前索引的图片
    images[index].style.display = 'block';
}

// 切换到下一张图片
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// 切换到上一张图片
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// 初始化，显示第一张图片
showImage(currentIndex);

// 设置定时器，每隔3秒切换到下一张图片
setInterval(nextImage, 3000);

// 为按钮添加事件监听器，实现左右滑动控制
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
    
});

