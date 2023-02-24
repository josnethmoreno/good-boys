import style from './Icons.module.css'

interface Props {
	hero: Boolean
}

export function Logotipo({ hero } : Props ) {
	return(
		<svg className={(hero) ? '' : style.logotipo } viewBox="0 0 1400 321" width="100%" fill="var(--fg-color)"><path d="M570.72 43.27L524.774.016H393.242v320.271h131.532l45.946-43.252V43.269zm-82.018 218.004h-15.98v-198.8h15.98v198.8zM968.241.06H877.61l-45.947 43.253v233.642l45.947 43.252h90.631l45.949-43.252V43.313L968.241.06zm-37.333 259.404h-15.98V60.804h15.98v198.66zM140.612 156.79l32.038-26.166V41.721L128.977.027H0v320.271h131.532l45.946-43.252v-87.564l-36.866-32.692zM95.46 261.284H79.48v-73.53h15.98v73.53zm0-134.413H79.48V62.483h15.98v64.388zM781.607 156.781l32.038-26.167V41.712L769.972.017H640.995v320.271h131.531l45.947-43.252v-87.563l-36.866-32.692zm-45.153 104.493h-15.98v-73.53h15.98v73.53zm0-134.413h-15.98V62.473h15.98v64.388zM341.327.017H229.155l-40.776 320.271h79.449l.155-1.651 2.96-53.594h28.611l2.959 53.594.156 1.651h79.449L341.327.018zm-66.724 198.816l6.728-121.563h7.819l6.728 121.563h-21.275zM1355.95 128.138h-53.42l.12-66.521h15.98v44.498h79.33V41.712L1354.29.017h-84.22l-43.67 41.695v105.054h1.14l43.67 41.679 51.47-.327-.18 76.224h-15.98v-46.133h-80.12v60.4l43.67 41.679h85.88l43.68-41.679V169.833l-43.68-41.695zM1148.88 0l-26.06 118.573h-4.37L1092.39.125h-78.76l65.38 182.774h-.36v137.419h83.28V182.899h.33L1227.64 0h-78.76z" fill="var(--fg-color)"></path></svg>
	)
}

export function Lines() {
	return (
		<svg fill='currentColor' width='80' height='32'>
			<path d='M22.414.136a.307.307 0 00-.365-.116.355.355 0 00-.225.337l-.081 3.357a.397.397 0 00.072.238l5.004 6.849c.097.133.122.31.063.468a.44.44 0 01-.342.294c-3.674.553-7.228 1.38-10.566 2.464a.4.4 0 01-.252-.002C7.571 11.197 2.75 7.765 1.465 6.78c-.144-.112-.342-.077-.45.079l-.883 1.26a.388.388 0 00.07.518c1.008.795 4.79 3.588 11.137 6.227.171.072.277.24.28.44 0 .201-.107.372-.278.444-6.574 2.783-10.25 5.886-11.22 6.77a.385.385 0 00-.034.523l.972 1.18c.118.144.316.161.453.042 1.214-1.072 5.827-4.798 14.201-7.68a.39.39 0 01.255-.003c5.466 1.805 11.333 2.974 17.442 3.474a.42.42 0 01.302.173l4.855 6.646c.428.584 1.21.678 1.742.208l.128-.114c.257-.228.419-.552.455-.914a1.45 1.45 0 00-.266-1L22.414.136zm8.748 17.073a.417.417 0 01-.372.245c-.016 0-.031 0-.05-.003a74.667 74.667 0 01-9.06-1.656c-.235-.06-.338-.277-.336-.466.002-.188.108-.403.34-.458a68.692 68.692 0 016.946-1.238.423.423 0 01.388.174l2.103 2.88a.5.5 0 01.04.522zM30.747 5.306a1.192 1.192 0 00-.83-.5 1.155 1.155 0 00-.91.292l-.13.114a1.398 1.398 0 00-.454.914c-.036.361.059.715.266 1l14.327 19.626c.207.284.502.463.83.5.33.04.652-.065.91-.293l.13-.113c.53-.47.616-1.328.19-1.914L30.748 5.306zM35.252 5.304c-.428-.585-1.21-.679-1.741-.208l-.128.114a1.388 1.388 0 00-.455.913c-.036.362.058.716.265 1l14.348 19.628c.428.585 1.207.679 1.74.208l.13-.113c.258-.228.418-.553.454-.914a1.446 1.446 0 00-.266-1L35.252 5.304zM78.612 22.41c-1.01-.794-4.791-3.587-11.138-6.226a.465.465 0 01-.28-.441c0-.2.106-.372.278-.443 6.579-2.783 10.252-5.886 11.22-6.77a.386.386 0 00.034-.525l-.972-1.18a.311.311 0 00-.453-.043c-1.214 1.072-5.83 4.799-14.203 7.68a.376.376 0 01-.25.003c-5.87-1.936-12.203-3.14-18.825-3.57a.412.412 0 01-.309-.176l-3.957-5.415c-.428-.585-1.21-.679-1.741-.208l-.129.114a1.388 1.388 0 00-.455.913 1.45 1.45 0 00.266 1l15.805 21.632c.042.059.103.101.169.123l3.263.996c.174.052.302-.045.365-.151a.383.383 0 00-.018-.429l-6.489-8.881a.5.5 0 01-.063-.47c.06-.162.19-.27.347-.293 4.128-.55 8.086-1.433 11.762-2.624a.399.399 0 01.252.002c8.151 2.83 12.973 6.26 14.257 7.245a.31.31 0 00.45-.077l.883-1.26a.387.387 0 00.066-.277.363.363 0 00-.135-.248zm-21.48-6.231a69.315 69.315 0 01-8.168 1.381c-.015.003-.03.003-.045.003a.412.412 0 01-.335-.178l-2.323-3.18a.503.503 0 01-.042-.52.415.415 0 01.416-.247c3.597.364 7.129.975 10.503 1.815.234.057.338.274.336.463-.003.193-.109.408-.343.463z'></path>
			<path d='M52.12.051a.3.3 0 00-.363.037l-8.493 7.436a.783.783 0 00-.106 1.033l.813 1.119c.23.317.65.369.939.114l7.018-6.134a.385.385 0 00.124-.252l.239-2.996A.365.365 0 0052.12.05zM34.15 22.995a.784.784 0 00-.141-.54l-.816-1.119a.655.655 0 00-.522-.277.634.634 0 00-.417.16l-7.018 6.134a.385.385 0 00-.124.253l-.24 2.996a.371.371 0 00.172.354.3.3 0 00.363-.037l8.494-7.436a.731.731 0 00.25-.488z'></path>
		</svg>
	)
}

export function Palmer() {
	return (
		<svg width='44' height='36' fill='currentColor'>
			<path d='M43.986 12.38c-3.547-4.039-7.909-5.665-12.968-4.833-3.98.654-7.145 2.676-8.019 3.279a.233.233 0 01-.36-.25c.176-.643.8-.934 1.159-1.052a.051.051 0 00.033-.04.042.042 0 00-.022-.045 1.688 1.688 0 00-.633-.23.234.234 0 01-.195-.285c.523-2.119 2.399-2.488 3.18-2.547.027-.002.036-.022.04-.031.003-.011.007-.03-.01-.046-.337-.334-.84-.406-1.11-.419a.234.234 0 01-.194-.345c.823-1.571 2.31-1.875 2.91-1.934.027-.002.036-.023.04-.032a.047.047 0 00-.011-.05 1.99 1.99 0 00-.841-.46.236.236 0 01-.157-.137.227.227 0 01.01-.201C27.572 1.41 29.105.57 30.26.094c.033-.013.031-.04.028-.056-.004-.014-.015-.042-.054-.035-5.664.768-7.493 4.593-8.017 6.2a.231.231 0 01-.221.163.227.227 0 01-.222-.162c-.523-1.608-2.353-5.433-8.017-6.2-.037-.008-.048.02-.053.034-.004.015-.006.043.027.056 1.157.476 2.69 1.318 3.421 2.628.035.06.04.134.012.2a.233.233 0 01-.157.137 1.97 1.97 0 00-.841.461.049.049 0 00-.013.05c.004.01.013.03.04.032.602.057 2.086.361 2.909 1.934a.235.235 0 01-.194.345c-.27.013-.774.085-1.11.419a.042.042 0 00-.01.046c.005.01.014.03.041.031.782.06 2.656.428 3.18 2.547a.233.233 0 01-.195.284c-.154.022-.39.081-.633.23-.022.014-.022.034-.022.045.002.01.005.031.033.04.358.117.985.41 1.158 1.054a.225.225 0 01-.09.247.233.233 0 01-.27.002c-.874-.603-4.038-2.625-8.019-3.28-5.05-.831-9.413.795-12.96 4.835-.024.027-.01.05 0 .062.01.011.032.028.061.01 1.44-.912 4.274-2.417 7.073-2.228a.232.232 0 01.188.343 2.7 2.7 0 00-.317 1.281c0 .024.017.037.026.041.01.004.031.011.052-.007.621-.572 2.3-1.867 4.474-1.496a.24.24 0 01.179.136.23.23 0 01-.013.216c-.126.207-.325.647-.253 1.28.002.022.019.031.028.035.007.004.03.01.05-.007.538-.458 2.558-1.885 5.92-1.06.087.02.153.086.173.173a.233.233 0 01-.072.228 1.97 1.97 0 00-.658 1.299c-.002.024.013.037.018.042.008.004.024.015.045.006.38-.157 1.147-.412 2.012-.36a.23.23 0 01.216.208.23.23 0 01-.17.251c-1.354.377-4.793 1.531-7.464 4.124-3.324 3.224-4.336 7.486-3.01 12.67a.043.043 0 00.048.036c.015 0 .04-.008.044-.04.188-1.727.795-5.875 2.361-7.114a.234.234 0 01.35.07c.139.249.5.87.87 1.261a.04.04 0 00.047.011.042.042 0 00.031-.04c.082-1.06.391-3.619 1.505-4.46a.24.24 0 01.2-.04.23.23 0 01.154.13c.11.242.436.847 1.085 1.225.02.011.039.004.046 0a.042.042 0 00.024-.039c.02-1.009.271-4.39 2.597-5.558a.235.235 0 01.229.009.23.23 0 01.11.199c0 .313.102.898.782 1.296a.05.05 0 00.046.002.046.046 0 00.026-.035c.078-.649.452-2.814 1.983-3.43a.233.233 0 01.225.03.233.233 0 01.096.206l-.268 3.805a.11.11 0 00.1.118l.653.068c.12.013.136.18.02.216l-.745.225a.11.11 0 00-.08.098l-.254 3.627a.11.11 0 00.1.118l.959.1c.12.013.136.18.02.216l-1.059.319a.11.11 0 00-.079.098l-.516 7.37a.11.11 0 00.1.118l2.28.236c.12.013.137.18.02.215l-2.419.73a.11.11 0 00-.08.099l-.314 4.515a.041.041 0 00.012.035.048.048 0 00.035.014h4.38c.02 0 .03-.009.036-.014a.051.051 0 00.013-.035l-.13-1.655a.11.11 0 00-.099-.101l-2.02-.209c-.12-.013-.136-.18-.02-.215l1.964-.593a.112.112 0 00.08-.114l-.511-6.591a.11.11 0 00-.1-.102l-.964-.1c-.12-.012-.137-.18-.02-.215l.942-.284a.111.111 0 00.08-.115l-.394-5.059a.11.11 0 00-.1-.101l-.955-.1c-.12-.013-.136-.18-.02-.215l.933-.283a.111.111 0 00.08-.114l-.475-6.1a.228.228 0 01.098-.208.231.231 0 01.229-.024c1.481.65 1.844 2.77 1.922 3.405.002.02.016.031.026.035a.045.045 0 00.046-.002c.68-.398.782-.983.782-1.296a.23.23 0 01.11-.2.235.235 0 01.229-.009c2.328 1.17 2.577 4.55 2.597 5.56 0 .023.016.034.024.038a.05.05 0 00.046 0c.65-.378.976-.983 1.084-1.225a.239.239 0 01.155-.13.24.24 0 01.2.04c1.113.843 1.423 3.399 1.505 4.46.001.027.022.036.03.04.01.004.03.007.05-.011.37-.39.731-1.013.87-1.262a.233.233 0 01.158-.116.243.243 0 01.194.046c1.565 1.238 2.172 5.387 2.36 7.114.004.033.03.04.045.04.016.002.04-.002.047-.035 1.327-5.182.314-9.446-3.01-12.67-2.672-2.593-6.11-3.748-7.463-4.124a.232.232 0 01-.17-.25.231.231 0 01.216-.21c.865-.053 1.632.202 2.01.36.022.01.039-.002.044-.005a.042.042 0 00.019-.043 1.975 1.975 0 00-.659-1.298.232.232 0 01-.072-.229.237.237 0 01.174-.173c3.362-.826 5.381.603 5.92 1.06.02.017.04.011.05.008.009-.004.026-.013.028-.035.071-.633-.128-1.074-.253-1.28a.235.235 0 01.166-.353c2.174-.368 3.853.925 4.474 1.496.02.019.043.011.052.008a.04.04 0 00.026-.04 2.677 2.677 0 00-.318-1.283.232.232 0 01.188-.343c2.802-.188 5.633 1.317 7.073 2.228.03.019.05.002.061-.01.02-.016.034-.04.01-.065z'></path>
		</svg>
	)
}

export function Barcode() {
	return (
		<svg width='77' height='34' fill='currentColor'>
			<path d='M0 0h2.108v33.595H0zm65.781 0h5.482v33.595h-5.482zM3.373 0h.843v33.595h-.843zm2.109 0h.843v33.595h-.843zM7.59 0h.422v33.595H7.59zm12.705 0h5.969v33.595h-5.969zm9.222 0h.843v33.595h-.843zm27.83 0h.843v33.595h-.843zm-3.625 0h2.388v33.595h-2.388zM32.233 0h2.388v33.595h-2.388zm14.151 0h.422v33.595h-.422zm1.686 0h.843v33.595h-.843zm25.301 0h.843v33.595h-.843zm-23.23 0h1.194v33.595h-1.194zm25.338 0h.843v33.595h-.843zM38.372 0h2.108v33.595h-2.108zm21.927 0h2.108v33.595h-2.108zm-17.71 0h2.108v33.595h-2.108zM11.807 0h2.952v33.595h-2.952zm5.06 0h2.108v33.595h-2.108z'></path>
		</svg>
	)
}

export function Close() {
	return (
		<svg
			viewBox='0 0 47 47'
			fill='currentColor'
			width='20'
			height='20'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M23.5 0V47'
				stroke='var(--fg-color)'
				stroke-width='2'></path>
			<path d='M47 23.5L0 23.5' stroke='var(--fg-color)' stroke-width='2'></path>
		</svg>
	)
}
