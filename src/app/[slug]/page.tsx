'use client'

import { useState } from 'react'

import Button from '@/components/Button/Button'
import Image from 'next/image'

import style from './page.module.css'

export default function Product() {
	const [productSize, setProductSize] = useState<String>('')
	const [productStyle, setProductStyle] = useState<String>('')

	const sizes = [
		{
			name: 'sm',
			active: 'true',
		},
		{
			name: 'md',
			active: 'false',
		},
		{
			name: 'lg',
			active: 'false',
		},
		{
			name: 'xl',
			active: 'false',
		},
		{
			name: 'xxl',
			active: 'false',
		},
	]

	const styles = [
		{
			name: 'lime',
			active: 'true',
		},
		{
			name: 'oatmeal',
			active: 'false',
		},
	]

	return (
		<section className={style.product}>
			<div className={style['product-media']}>
				<figure>
					<Image src='/shop/1.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/2.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/1.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/2.png' fill={true} alt=''></Image>
				</figure>
			</div>
			<div className={style['product-info']}>
				<header className={style['product-header']}>
					<h3>BB 25TH ANNIVERSARY TEE</h3>
					<span>$35.00</span>
				</header>
				<div className={style['product-style']}>
					<span>Style: {productStyle}</span>
					<button data-style='lime' data-active="true"></button>
					<button data-style='oatmeal' data-active="false"></button>
				</div>
				<div className={style['product-size']}>
					<span>Size: {productSize} </span>
					<div>
						{sizes.map((size) => (
							<button key={size.name} className={style['size-button']} data-active={size.active}>{size.name}</button>
						))}
					</div>
					<Button text='Add to cart' type='fill' />
				</div>
				<div className={style['product-caption']}>
					We ride together. We die together. We got the whole damn story printed
					on the back of this tee. Featuring the official 25th Anniversary logo
					on the front. White ink printed on black cotton. Available for 10 days
					only. <br></br><br></br> 🙏 This is a limited edition production run. Printing starts
					when the drop ends. Reminder: Bad Boys for Life. Shipping may take 10+
					days due to COVID-19.
				</div>
			</div>
		</section>
	)
}
