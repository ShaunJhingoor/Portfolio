document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;
	const btnTheme = document.getElementById('btn-theme');
	const btnHamburger = document.querySelector('.fa-bars');
  
	const applyTheme = (theme) => {
	  body.className = theme;
	  if (theme === 'dark') {
		btnTheme.classList.remove('fa-moon');
		btnTheme.classList.add('fa-sun');
	  } else {
		btnTheme.classList.remove('fa-sun');
		btnTheme.classList.add('fa-moon');
	  }
	};
  
	const getStoredTheme = () => localStorage.getItem('portfolio-theme') || 'light';
  
	const toggleTheme = () => {
	  const currentTheme = body.className;
	  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	  applyTheme(newTheme);
	  localStorage.setItem('portfolio-theme', newTheme);
	};
  
	// Apply the saved theme on page load
	applyTheme(getStoredTheme());
  
	// Add event listener for theme toggle button
	btnTheme.addEventListener('click', toggleTheme);
  
	const displayList = () => {
	  const navUl = document.querySelector('.nav__list');
	  if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars');
		btnHamburger.classList.add('fa-times');
		navUl.classList.add('display-nav-list');
	  } else {
		btnHamburger.classList.remove('fa-times');
		btnHamburger.classList.add('fa-bars');
		navUl.classList.remove('display-nav-list');
	  }
	};
  
	btnHamburger.addEventListener('click', displayList);
  
	const scrollUp = () => {
	  const btnScrollTop = document.querySelector('.scroll-top');
	  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		btnScrollTop.style.display = 'block';
	  } else {
		btnScrollTop.style.display = 'none';
	  }
	};
  
	document.addEventListener('scroll', scrollUp);
  
	const cellExplorerImage = document.getElementById('cellExplorer');
	cellExplorerImage.addEventListener('click', function() {
	  window.open('https://shaunjhingoor.github.io/JSproject/', '_blank');
	});
  
	const allAdventureImage = document.getElementById('allAdventure');
	allAdventureImage.addEventListener('click', function() {
	  window.open('https://alladventure.onrender.com/', '_blank');
	});
  
	const teamMatesImage = document.getElementById('teamMates');
	teamMatesImage.addEventListener('click', function() {
	  window.open('https://teammates.onrender.com/', '_blank');
	});
  });
  


  

