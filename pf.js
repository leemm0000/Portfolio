// 선택
let targetLink = document.querySelectorAll('.tab_menu a');
let targetContent = document.querySelectorAll('.con_wrap');

// 초기 설정: 모든 콘텐츠 숨기고 tab4만 보이게
for (let x = 0; x < targetContent.length; x++) {
  targetContent[x].style.display = 'none';
}
document.getElementById('tab4').style.display = 'block'; // 초기 보여줄 탭
targetLink.forEach(link => link.classList.remove('active'));
if (targetLink[3]) {
  targetLink[3].classList.add('active'); // 4번째 탭에 active (만약 있을 경우)
}

// 탭 클릭 시 이벤트
for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener('click', function (e) {
    e.preventDefault(); // a태그의 기본동작 막기

    // 클릭된 링크의 href 속성에서 id 추출
    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#', '');

    // 모든 콘텐츠 숨기기
    for (let x = 0; x < targetContent.length; x++) {
      targetContent[x].style.display = 'none';
    }

    // 클릭된 탭의 콘텐츠만 보이기
    document.getElementById(tabTarget).style.display = 'block';

    // 모든 링크에서 active 제거
    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove('active');
    }

    // 현재 클릭된 탭에 active 추가
    e.target.classList.add('active');
  });
}
