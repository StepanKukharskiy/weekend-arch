<script>
	import photo from '$lib/images/photo.jpg';
	import logo from '$lib/images/logo_nobg.png';
	import demo from '$lib/images/demo.mp4';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
</script>

<main>
	<h1>SA lab <span class='logo' style='background-image: url({logo});'></span> ARCH WEEKEND</h1>
	<div class="canvasContainer">
		<div style='width: 100%; height: 100%; position: absolute; z-index: 2;'></div>
		<Canvas>
			<Scene />
		</Canvas>
	</div>
	<!-- <div class="imageContainer"></div> -->

	<div class="running-text-container">
		<h3 class="running-text">Rhino + Grasshopper + Blender + HTML + CSS + JavaScript</h3>
	</div>

	<div class="gridContainer">
		<div class="gridSmallCard">
			<h3>6 июля</h3>
		</div>
		<div class="gridSmallCard">
			<h3>online + запись</h3>
		</div>
		<div class="gridSmallCard">
			<h3>5 часов</h3>
		</div>
		<div class="gridSmallCard">
			<h3>7500₽</h3>
		</div>
		<div class="gridBigCard" style="padding: 0;">
			<a class="registerButton" href='/register'>Записаться</a>
		</div>
	</div>

	<div class="gridContainer" style="border: none;">
		<div class="gridBigCard" style="border: none; padding-top: 10px;">
			<div class="gridCardContainer statement">
				<h3 style="align-self: start;">ARCH WEEKEND —</h3>
				<p>
					Это смелый прыжок в мир алгоритмического проектирования для архитекторов и дизайнеров,
					который научит ориентироваться в технологиях в контексте стремительно развивающегося мира.
					Мы предлагаем быстрое погружение в генеративный дизайн, цифровые миры, искусственный
					интеллект и геймдизайн.
					<br />Архитекторы SA lab придумали ARCH WEEKEND, потому что знают, что учиться новому
					может быть <span style="text-decoration: line-through;">больно</span> весело. Более 10 лет
					мы используем в архитектурной практике цифровые технологии, а последние 5 лет учим
					студентов из 22 стран. Полученные навыки помогают шире взглянуть на архитектуру, выстроить
					собственный профессиональный трек в российских и зарубежных компаниях.
					<br />Мы предлагаем посвятить выходные интенсивным занятиям, по результатам которых будет
					сделан небольшой итоговый проект.
				</p>
			</div>
		</div>
	</div>
	<div class="gridContainer">
		<div class="gridSmallCard">
			<div class="gridCardContainer">
				<h3>ARCHWEEKEND vol 1.0</h3>
			</div>
		</div>
		<div class="gridSmallCard">
			<div class="gridCardContainer">
				<p>В первый раз мы встретимся, чтобы:</p>
				<ul>
					<li>
						👀 рассмотреть принципы формообразования воксельной архитектуры,
					</li>
					<li>🐆 создать модель с использованием Rhino+Grasshopper,</li>
					<li>🦄 создать на ее основе ассет в Blender для использования в браузере,</li>
					<li>
						🪄 добавить немного магии с HTML + CSS + JavaScript, чтобы создать интерактивную сцену.
					</li>
				</ul>
			</div>
		</div>

		<div class="gridSmallCard" style="justify-content: start; align-items: center;">
			<div class="gridCardContainer">
				<h3>Часть 1</h3>
				<ul>
					<li>Основы моделирования в Grasshopper</li>
					<li>Моделирование воксельного здания</li>
					<li>Основы подготовки ассетов и их текстурирования в Blender</li>
					<li>Подготовка ассета воксельного здания</li>
				</ul>
			</div>
		</div>

		<div class="gridSmallCard" style="justify-content: start; align-items: center;">
			<div class="gridCardContainer">
				<h3>Часть 2</h3>
				<ul>
					<li>Основы работы с HTML, CSS, JavaScript</li>
					<li>Основы работы с библиотекой Three.js</li>
					<li>Создание интерактивной сцены, которая будет работать в браузере</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- <video src="{demo}" autoplay={true} muted={true} preload="auto" loop={true} playsinline={true} style='width: 100%;'></video> -->

	<div class="gridContainer" style="border: none;">
		<div class="gridBigCard" style="border: none; padding-top: 10px;">
			<div class="gridCardContainer">
				<h3>Куратор :: Степан Кухарский</h3>
				<div class="curatorTextContainer">
					<img src={photo} alt="curator" />
					<p>
						Привет!
<br /><br />Меня зовут Степан Кухарский. Я архитектор и вычислительный дизайнер, более 10 лет использую алгоритмы в работе с городскими территориями, общественными пространствами, зданиями, разрабатываю игры и виртуальную архитектуру.
<br />Я люблю делиться опытом и преподаю на международных площадках и конференциях: DigitalFUTURES, CDRF, eCAADe, LiveAcademy. На воркшопах я выстраиваю дружелюбную атмосферу, открытую для экспериментов и неожиданных решений. 
<br /><br />Присоединяйтесь к ARCHWEEKEND — проведём архитектурно выходные. 😎
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="gridContainer">
		<div class="gridSmallCard" style="justify-content: start; align-items: start;">
			<div class="gridCardContainer">
				<h3>Для кого</h3>
				<ul>
					<li>для новичков</li>
					<li>для тех, кто начал изучать Rhino или Blender</li>
					<li>для всех, кто хочет разобраться с основами работы в HTML, CSS, JavaScript.</li>
				</ul>
			</div>
		</div>

		<div class="gridSmallCard" style="justify-content: start; align-items: start;">
			<div class="gridCardContainer">
				<h3>Технические требования</h3>
				<ul>
					<li>наличие ноутбука или ПК с выходом в интернет</li>
					<li>установленные Rhino, Grasshopper, Blender</li>
					<li>
						регистрация на платформе <a href="https://kodiia.com" target="_blank">Kodiia.com</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="gridBigCard" style="padding: 0;">
			<a class="registerButton" href='/register'>Записаться</a>
		</div>

		<div class="gridBigCard">
			<div class="gridCardContainer">
				<h3>Мы на связи:</h3>
			</div>
		</div>

		<div class="gridSmallCard">
			<a href="mailto:hello@salab.org">hello@salab.org</a>
		</div>
		<div class="gridSmallCard">
			<a href="https://t.me/SAlab_daily" target="_blank">@salab.daily</a>
		</div>
	</div>
</main>
<footer>
	<div class="footerContainer">
		<a href='requisites'>реквизиты</a>
		<a href='/privacy-policy'>политика конфиденциальности</a>
		<a href='/oferta'>публичная оферта</a>
	</div>
	<p style="text-align: center;">© 2024 SA lab</p>
</footer>

<style>
	main {
		padding: 0 10px;
		width: 100%;
		max-width: 1800px;
		font-weight: 300;
		box-sizing: border-box;
	}
	h1 {
		/* background-color: #f9f9f9; */
		margin: 0;
		padding: 20px 0;
		display: flex;
		align-items: center;
	}
	.logo{
		display: block;
		width: 80px;
		height: 80px;
		background-size: 100px 100px;
		background-position: center;
	}
	.logo:hover{
		transform: rotateZ(360deg);
		transition: all 1s;
	}
	h3 {
		/* font-size: 42px; */
		font-weight: 500;
	}
	a {
		color: blue;
	}
	video{
		margin: 20px 0;
		width: 100%;
	}

	.imageContainer {
		width: 100%;
		height: 80svh;
		background-image: url('https://images.adsttc.com/media/images/5bec/31c3/08a5/e5a5/8c00/0693/large_jpg/6.jpg?1542205883');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		/* border: 1px solid #1a1a1a; */
		/* margin-bottom: 10px; */
		box-sizing: border-box;
	}
	.canvasContainer {
		width: 100%;
		height: 80vh;
		box-sizing: border-box;
		/* cursor: pointer; */
		/* background: radial-gradient(circle, white, blue); */
		filter: brightness(1.025) contrast(1.05);
	}

	.running-text-container {
		border: 2px solid #1a1a1a;
		border-bottom: none;
		box-sizing: border-box;
		white-space: nowrap;
		text-transform: uppercase;
		overflow: hidden;
		text-overflow: ellipsis;
		color: blue;
		/* background-color: #f9f9f9; */
		/* font-size: 30px; */
	}

	.running-text {
		margin: 5px 0;
		/* animation properties */
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);

		-moz-animation: my-animation 15s linear infinite;
		-webkit-animation: my-animation 15s linear infinite;
		animation: my-animation 15s linear infinite;
	}
	.statement {
		max-width: 800px;
		font-size: 2rem;
		margin: auto;
	}
	.statement p {
		columns: 1;
	}

	.gridContainer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border: 1px solid #1a1a1a;

		/* color: blue; */
	}
	.gridCardContainer {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.gridSmallCard {
		min-height: 80px;
		/* padding: 10px; */
		border: 1px solid #1a1a1a;
		/* box-shadow: 0 0 2px #1a1a1a; */
		/* background-color: #f9f9f9; */
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.gridSmallCard h3 {
		text-align: center;
	}
	.gridBigCard {
		border: 1px solid #1a1a1a;
		grid-column: span 2;
		/* background-color: #f9f9f9; */
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	.gridContainer h3 {
		margin: 0;
		font-weight: 500;
		color: blue;
	}
	.curatorTextContainer {
		max-width: 800px;
		margin: auto;
		margin-top: 20px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		padding: 10px;
		box-sizing: border-box;
	}
	.curatorTextContainer img {
		width: 80%;
		max-width: 300px;
	}
	.curatorTextContainer p {
		margin: 0;
	}
	.registerButton {
		/* width: 100%; */
		height: 100%;
		min-height: 80px;
		margin: 0;
		border: none;
		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		/* font-size: 20px; */
		font-weight: 500;
		background: #0000ff10;
		color: blue;
		cursor: pointer;
		transition: all 0.25s;
		padding: 10px;
		text-decoration: underline;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.registerButton:hover {
		background-color: blue;
		color: #f9f9f9;
	}

	footer {
		/* border: 0.5px solid blue; */
		/* width: calc(100% - 19px); */
		width: 100%;
		/* max-width: 800px; */
		padding: 0 10px;
		box-sizing: border-box;
		font-size: 1rem;
		color: #919191;
		font-weight: 300;
	}
	footer a{
		color: #919191;
		text-decoration: none;
		margin: 10px 0;
	}
	.footerContainer {
		/* border: 0.5px solid blue; */
		/* background: #f9f9f9; */
		padding: 10px;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		text-align: center;
	}

	/* for Firefox */
	@-moz-keyframes my-animation {
		from {
			-moz-transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
		}
	}

	/* for Chrome */
	@-webkit-keyframes my-animation {
		from {
			-webkit-transform: translateX(100%);
		}
		to {
			-webkit-transform: translateX(-100%);
		}
	}

	@keyframes my-animation {
		from {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}

	@media screen and (max-width: 700px) {
		h1{
			flex-direction: column;
			text-align: center;
		}
		.gridContainer {
			display: grid;
			grid-template-columns: 1fr;
		}
		.gridBigCard {
			grid-column: span 1;
			padding: 10px;
		}
		.footerContainer {
			display: grid;
			grid-template-columns: 1fr;
		}
		.curatorTextContainer {
			display: grid;
			grid-template-columns: 1fr;
		}
		.curatorTextContainer img {
			margin: auto;
			margin-bottom: 20px;
		}
		.statement{
			font-size: 1.5rem;
		}
		.statement p {
			columns: 1;
		}
	}
</style>
