// 모든 square 요소를 선택
var squares = document.querySelectorAll('.square');

// 아래에서 위로 올라오는 애니메이션을 적용.
squares.forEach(function(square, index) {
  var delay = 1000 + index * 300;

  setTimeout(function() {
    var top = square.querySelector('.s_top');
    var bottom = square.querySelector('.s_bottom');
    
    top.style.transform = 'scaleY(1)';
    top.style.opacity = '1';
    bottom.style.transform = 'scaleY(1)';
    bottom.style.opacity = '1';
  }, delay);
});

// 평행사변형을 만드는 애니메이션을 적용
setTimeout(function() {
  squares.forEach(function(square) {
    var top = square.querySelector('.s_top');
    var bottom = square.querySelector('.s_bottom');
    
    top.style.transform = 'skewX(-20deg)';
    bottom.style.transform = 'skewX(-20deg)';
  });
}, 2500);
// //square 





  document.querySelector('.main_inner .contents .portpolio.p1').addEventListener('mouseover', function() {
    document.querySelector('.kd_text').style.opacity = "1";
  });
  document.querySelector('.main_inner .contents .portpolio.p1').addEventListener('mouseout', function() {
    document.querySelector('.kd_text').style.opacity = "0";
  });

  document.querySelector('.main_inner .contents .portpolio.p2').addEventListener('mouseover', function() {
    document.querySelector('.paik_text').style.opacity = "1";
  });
  document.querySelector('.main_inner .contents .portpolio.p2').addEventListener('mouseout', function() {
    document.querySelector('.paik_text').style.opacity = "0";
  });

  document.querySelector('.main_inner .contents .portpolio.p3').addEventListener('mouseover', function() {
    document.querySelector('.JCH_text').style.opacity = "1";
  });
  document.querySelector('.main_inner .contents .portpolio.p3').addEventListener('mouseout', function() {
    document.querySelector('.JCH_text').style.opacity = "0";
  });
  // //square_text





  document.querySelector('.p1').addEventListener('mouseover', function() {
    document.querySelector('#bg1').style.opacity = "1";
  });
  document.querySelector('.p1').addEventListener('mouseout', function() {
    document.querySelector('#bg1').style.opacity = "0";
  });

  document.querySelector('.p2').addEventListener('mouseover', function() {
    document.querySelector('#bg2').style.opacity = "1";
  });
  document.querySelector('.p2').addEventListener('mouseout', function() {
    document.querySelector('#bg2').style.opacity = "0";
  });

  document.querySelector('.p3').addEventListener('mouseover', function() {
    document.querySelector('#bg3').style.opacity = "1";
  });
  document.querySelector('.p3').addEventListener('mouseout', function() {
    document.querySelector('#bg3').style.opacity = "0";
  });

// //background-img





let intervalId;
const container = document.getElementById('textContainer');
const textGroups = Array.from(container.getElementsByClassName('welcome_text_group'));
const speed = 0.3;

function startAnimation() {
  // 첫 번째 텍스트 그룹의 너비를 기준으로 두 번째 텍스트 그룹의 시작 위치를 설정
  textGroups[1].style.left = textGroups[0].offsetWidth + 'px';

  intervalId = setInterval(function() {
    textGroups.forEach((textGroup) => {
      let left = textGroup.style.left ? parseFloat(textGroup.style.left) : 0;
      let width = textGroup.offsetWidth;

      if (left <= -width) {
        // 텍스트 그룹이 왼쪽으로 완전히 이동했으면, 오른쪽 끝으로 이동
        left = width;
      } else {
        // 그룹을 왼쪽으로 이동
        left -= speed;
      }
      textGroup.style.left = left + 'px';
    });
  }, 20);
}

function stopAnimation() {
  clearInterval(intervalId);
}
// //text_slider




window.onload = function() {
  const intro = document.querySelector('.intro');
  const main = document.querySelector('.main');

  // 사용자가 '뒤로 가기'를 통해 페이지에 접속했는지 확인
  const navigationType = window.performance.getEntriesByType("navigation")[0].type;
  if (navigationType === 'back_forward') { 
    // '뒤로 가기'를 통해 페이지에 접속했다면 인트로를 건너뛰고 바로 메인 화면을 보여줌.
    intro.style.display = 'none';
    main.style.display = 'block';
  } else {
    // 그 외의 경우(처음 접속, 새로고침 등)에는 인트로 화면을 보여줌.
    setTimeout(function() {
      intro.style.clipPath = 'inset(0% 0% 0 100%)';
      intro.addEventListener('transitionend', function() {
        intro.style.display = 'none';
        main.style.display = 'block'; 
      });
    }, 3500);
  }

  startAnimation();
  // //intro





  const logo = document.querySelector('.logo');
  const portpolios = document.querySelectorAll('.portpolio');
  const footer = document.querySelector('.footer');
  const bg = document.querySelectorAll('.main .bg');

  bg.forEach(bgElement => {
    bgElement.style.backgroundSize = "100%";
  });

  logo.addEventListener('click', function() {
    location.reload();
  });
  
  portpolios.forEach((portpolio, i) => {
    portpolio.addEventListener('mouseenter', function() {
      logo.style.opacity = '0';
      textContainer.style.opacity = '0';
      footer.style.opacity = '0';
      bg[i % 3].style.transition = "background-size 5s ease-in-out, opacity 0.5s ease-in-out";  
      bg[i % 3].style.backgroundSize = "103%";
    });
  
    portpolio.addEventListener('mouseleave', function() {
      logo.style.opacity = '1';
      textContainer.style.opacity = '1';
      footer.style.opacity = '1';
      bg[i % 3].style.transition = "background-size 5s ease-in-out, opacity 0.5s ease-in-out"; 
      bg[i % 3].style.backgroundSize = "100%";
    });
  });
  // //main_logo

  

  
 
  const portpoliolinkLogos = document.querySelectorAll('.portpolio_link .logo');
  const portPolios_p1 = document.querySelectorAll('.portpolio.p1');
  const portPolios_p2 = document.querySelectorAll('.portpolio.p2');
  const portPolios_p3 = document.querySelectorAll('.portpolio.p3');
  const kdnavien = document.querySelector('.portpolio_link .kdnavien');
  const paikdabang = document.querySelector('.portpolio_link .paikdabang');
  const JCH = document.querySelector('.portpolio_link .JCH');

  
  const hideElement = (element) => {
    element.style.transition = 'opacity 0.3s ease-in-out';
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.display = 'none';
    }, 300);
  };
  
  const showElement = (element) => {
    setTimeout(() => {
      element.style.display = 'block';
      element.style.transition = 'opacity 0.3s ease-in-out';
      setTimeout(() => {
        element.style.opacity = '1';
      }, 300);
    }, 300); // *hideElement 함수가 끝난 후에 실행되도록 지연 시간을 추가
  };
  
  portPolios_p1.forEach((portPolio) => {
    portPolio.addEventListener('click', function() {
      setTimeout(() => {
        history.pushState({page: 'kdnavien'}, null, '');
        console.log('F1 clicked');
        showElement(kdnavien);
        hideElement(paikdabang);
        hideElement(JCH);
        if (main) {
          hideElement(main);
        }
      }, 100); // 0.1초 딜레이
    });
  });
  
  portPolios_p2.forEach((portPolio) => {
    portPolio.addEventListener('click', function() {
      setTimeout(() => {
        history.pushState({page: 'paikdabang'}, null, '');
        console.log('F2 clicked');
        hideElement(kdnavien);
        showElement(paikdabang);
        hideElement(JCH);
        if (main) {
          hideElement(main);
        }
      }, 100); // 0.1초 딜레이
    });
  });
  
  portPolios_p3.forEach((portPolio) => {
    portPolio.addEventListener('click', function() {
      setTimeout(() => {
        history.pushState({page: 'JCH'}, null, '');
        console.log('F3 clicked');
        hideElement(kdnavien);
        hideElement(paikdabang);
        showElement(JCH);
        if (main) {
          hideElement(main);
        }
      }, 100); // 0.1초 딜레이
    });
  });
  
  portpoliolinkLogos.forEach((portpoliolinkLogo) => {
    portpoliolinkLogo.addEventListener('click', function() {
      setTimeout(() => {
        hideElement(kdnavien);
        hideElement(paikdabang);
        hideElement(JCH);
        showElement(main);
      }, 100); // 0.1초 딜레이
    });
  });

  kdnavien.style.opacity = '0';
  paikdabang.style.opacity = '0';
  JCH.style.opacity = '0';
  // //portpolio_logo
  // //portpolio_link





  
  // 페이지 로드 시 현재 상태를 'main'으로 설정.
  history.replaceState({page: 'main'}, null, '');

  // '뒤로 가기' 버튼을 눌렀을 때 발생하는 popstate 이벤트를 처리.
  window.addEventListener('popstate', function(event) {
    if (event.state) {
      // 모든 페이지를 숨깁니다.
      hideElement(kdnavien);
      hideElement(paikdabang);
      hideElement(JCH);
      hideElement(main);

      // 이벤트 상태에 따라 해당 페이지를 보여줌.
      switch (event.state.page) {
        case 'main':
          showElement(main);
          break;
        case 'kdnavien':
          showElement(kdnavien);
          break;
        case 'paikdabang':
          showElement(paikdabang);
          break;
        case 'JCH':
          showElement(JCH);
          break;
      }
    }
  });
  // //history
};





let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');

p1.addEventListener('mouseover', function() {
  p2.style.opacity = '0';
  p3.style.opacity = '0';
});

p1.addEventListener('mouseout', function() {
  p2.style.opacity = '1';
  p3.style.opacity = '1';
});

p2.addEventListener('mouseover', function() {
  p1.style.opacity = '0';
  p3.style.opacity = '0';
});

p2.addEventListener('mouseout', function() {
  p1.style.opacity = '1';
  p3.style.opacity = '1';
});

p3.addEventListener('mouseover', function() {
  p1.style.opacity = '0';
  p2.style.opacity = '0';
});

p3.addEventListener('mouseout', function() {
  p1.style.opacity = '1';
  p2.style.opacity = '1';
});
// //portfolio_btn