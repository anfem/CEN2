(() => {
// 모바일 매뉴
  const menuBg = document.getElementById('mobile_menu_bg');
  const menuWrap = document.querySelector('.mobile_menu_wrap');
  const openBtn = document.querySelector('.mobile_menu');
  const closeBtn = document.querySelector('.close_btn');

  // 메뉴 열기
  openBtn.addEventListener('click', () => {
    menuBg.style.display = 'block';

    // 바운스 트릭을 위해 transform 초기화 (우측 숨김)
    requestAnimationFrame(() => {
      menuBg.classList.add('active'); // CSS 트랜지션으로 슬라이드 인
    });
  });

  // 메뉴 닫기
  closeBtn.addEventListener('click', () => {
    menuBg.classList.remove('active');

    // 트랜지션 종료 후 display:none 처리
    setTimeout(() => {
      menuBg.style.display = 'none';
    }, 600); // CSS의 transition 시간과 맞춤
  });

  // 리사이즈 시에도 정확한 초기 위치로 복원
  window.addEventListener('resize', () => {
    if (!menuBg.classList.contains('active')) {
      menuWrap.style.transform = `translateX(100%)`;
    }
  });

  // 서브메뉴 컨텐츠 눌렀을떄
  const menuTitles = document.querySelectorAll('.m_menu_title');

  menuTitles.forEach((title) => {
    title.addEventListener('click', function () {
      const currentLi = this.parentElement;
      const currentUl = currentLi.querySelector('ul');

      // 모든 다른 li 닫기
      document.querySelectorAll('.m_menu_contents > ul > li').forEach((li) => {
        if (li !== currentLi) {
          li.classList.remove('open');
          const ul = li.querySelector('ul');
          if (ul) ul.style.height = '0px';
        }
      });

      // 현재 열려 있으면 닫기
      if (currentLi.classList.contains('open')) {
        currentUl.style.height = '0px';
        currentLi.classList.remove('open');
      } else {
        // 열기
        currentUl.style.height = currentUl.scrollHeight + 'px';
        currentLi.classList.add('open');
      }
    });
  });
//모바일 메뉴 끝



  // 윈도우 리사이즈 시에도 translateX 초기화 (안하면 resize 후 작동 오류날 수 있음)
  window.addEventListener('resize', () => {
    if (!menuBg.classList.contains('active')) {
      const menuWidth = menuWrap.offsetWidth;
      menuWrap.style.transform = `translateX(${menuWidth}px)`;
    }
  });
 // 

  // window.addEventListener('DOMContentLoaded', () => {
  //   const gnb = document.getElementById('gnb');
  //   const nbWrap = gnb.querySelector('.nb_wrap');
  //   const subMenu = gnb.querySelector('.sub_menu');

  //   const logo = nbWrap.querySelector('#logo');

  //   const menuItems = document.querySelectorAll('.nb_wrap ul li');
  //   const subMenus = document.querySelectorAll('.sub_menu > ul');

  //   // sub_menu의 top 위치를 nb_wrap 아래로 설정
  //   function setSubMenuPosition() {
  //     const nbWrapHeight = nbWrap.offsetHeight;
  //     subMenu.style.top = nbWrapHeight + 'px';
  //   }

  //   // gnb 높이를 확장 또는 축소
  //   function toggleGnbHeight(expand) {
  //     const windowWidth = window.innerWidth;

  //     // 1024px 이하일 경우 강제 auto 고정, JS로 높이 조정하지 않음
  //     if (windowWidth <= 1024) {
  //       gnb.style.height = 'auto';
  //       return;
  //     }

  //     const nbHeight = nbWrap.offsetHeight;
  //     const subHeight = subMenu.offsetHeight;
  //     gnb.style.height = expand ? `${nbHeight + subHeight}px` : `${nbHeight}px`;
  //   }

  //   // 초기 설정
  //   setSubMenuPosition();
  //   toggleGnbHeight(false);

  //   // 마우스 진입 시 확장
  //   nbWrap.addEventListener('mouseenter', () => {
  //     toggleGnbHeight(true);
  //   });

  //   // 마우스가 sub_menu를 벗어나고 nb_wrap에도 없는 경우 축소
  //   function onLeaveCheck(e) {
  //     const related = e.relatedTarget;
  //     if (!nbWrap.contains(related) && !subMenu.contains(related)) {
  //       toggleGnbHeight(false);
  //     }
  //   }

  //   // 이벤트 바인딩
  //   nbWrap.addEventListener('mouseleave', onLeaveCheck);
  //   subMenu.addEventListener('mouseleave', onLeaveCheck);

  //   // 창 크기 변경 시 위치 재설정
  //   window.addEventListener('resize', () => {
  //     setSubMenuPosition();
  //     const isOver = nbWrap.matches(':hover') || subMenu.matches(':hover');
  //     toggleGnbHeight(isOver);
  //   });

  //   function activate(index) {
  //     // 전체 초기화
  //     menuItems.forEach((item, i) => {
  //       item.classList.remove('active');
  //       subMenus[i]?.classList.remove('active');
  //     });

  //     // 해당 인덱스 활성화
  //     menuItems[index].classList.add('active');
  //     subMenus[index]?.classList.add('active');
  //   }

  //   function clearIfOutside(index, event) {
  //     const to = event.relatedTarget;
  //     if (
  //       !menuItems[index].contains(to) &&
  //       !subMenus[index].contains(to)
  //     ) {
  //       menuItems[index].classList.remove('active');
  //       subMenus[index].classList.remove('active');
  //     }
  //   }

  //   menuItems.forEach((item, index) => {
  //     item.addEventListener('mouseenter', () => activate(index));
  //     item.addEventListener('mouseleave', (e) => clearIfOutside(index, e));
  //   });

  //   subMenus.forEach((submenu, index) => {
  //     submenu.addEventListener('mouseenter', () => activate(index));
  //     submenu.addEventListener('mouseleave', (e) => clearIfOutside(index, e));
  //   });
  // });
})();
