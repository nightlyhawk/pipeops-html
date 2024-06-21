const Home = ({color}) => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1051_5647)">
        <path d="M20.5883 9.4198L11.8152 0.646298C11.0901 -0.0766965 9.91103 -0.0777222 9.18445 0.647281L0.41138 9.4198C-0.137127 9.96822 -0.137127 10.8578 0.41138 11.4063C0.960228 11.9551 1.84925 11.9551 2.39801 11.4063L3.58725 10.2168V19.3995C3.58725 20.2261 4.25742 20.8962 5.08413 20.8962H8.28184V16.7244C8.28184 16.4003 8.54449 16.1372 8.86915 16.1372H12.1321C12.4564 16.1372 12.7192 16.4003 12.7192 16.7244V20.8963H15.9164C16.7431 20.8963 17.4132 20.2261 17.4132 19.3995V10.2176L18.6018 11.4063C18.8764 11.6807 19.2357 11.8178 19.5951 11.8178C19.9544 11.8178 20.3139 11.6807 20.5883 11.4063C21.1372 10.8578 21.1372 9.96826 20.5883 9.4198Z" fill-opacity={color === 'black'? '1' : '0.6'} fill={color}/>
        </g>
        <defs>
        <clipPath id="clip0_1051_5647">
        <rect width="21" height="21" fill='white'/>
        </clipPath>
        </defs>
        </svg>
    )
}

export default Home