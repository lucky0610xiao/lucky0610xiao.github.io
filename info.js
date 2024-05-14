document.addEventListener("DOMContentLoaded", function() {
const personalInfo = {
        name: "肖瑞真",
        email: "2796385614@qq.com",
        address: "深圳市南山区"
    };

    const educationHistory = [
        { degree: "初中", field: "无", institution: "甲中附实", year: "2015-2018" },
        { degree: "高中", field: "无", institution: "汕尾市林伟华中学", year: "2018-2021" },
        { degree: "大专", field: "物联网应用技术", institution: "深圳职业技术大学", year: "2021-2014" }
       
       
        
    ];

    const workHistory = [
        { position: "英语家教", company: "神奇口袋", year_start: "2021.10", year_end: "2022.10" },
        { position: "Web前端实习生", company: "子墨科技文化", year_start: "2024.1", year_end: "2024.4" },
        { position: "外贸员", company: "深圳畅航", year_start: "2024.5", year_end: "今" }
    ];

    // 加载个人信息
    document.getElementById('personal-info').innerHTML = `
        <p><strong>姓名:</strong> ${personalInfo.name}</p>
        <p><strong>邮箱:</strong> ${personalInfo.email}</p>
        <p><strong>地址:</strong> ${personalInfo.address}</p>
    `;

    // 加载教育经历（使用表格展示）
    let educationHtml = '<table>';
    educationHtml += '<tr><th>学历</th><th>专业</th><th>学校</th><th>起止时间</th></tr>';
    educationHistory.forEach(edu => {
        educationHtml += `<tr><td>${edu.degree}</td><td>${edu.field}</td><td>${edu.institution}</td><td>${edu.year}</td></tr>`;});
    educationHtml += '</table>';
    document.getElementById('education-history').innerHTML = educationHtml;

    // 加载工作经历（使用表格展示）
    let workHtml = '<table>';
    workHtml += '<tr><th>职位</th><th>公司</th><th>起止时间</th></tr>';
    workHistory.forEach(job => {
        workHtml += `<tr><td>${job.position}</td><td>${job.company}</td><td>${job.year_start} - ${job.year_end}</td></tr>`;
    });
    workHtml += '</table>';
    document.getElementById('work-history').innerHTML = workHtml;
        // 绩点数据统计
        const data = {
            labels: ['大一上', '大一下', '大二上', '大二下', '大三上'],
            values: [3.43, 3.39, 3.46, 3.35, 3.31]
        };
        // 使用 Chart.js 绘制柱状图
        const ctx = document.getElementById('data-chart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '绩点',
                    data: data.values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


});