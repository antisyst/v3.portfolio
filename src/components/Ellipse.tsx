import styled from 'styled-components';

const EllipseInt = styled.div `
    position: absolute;
    background: var(--var-color-component-primary);
    filter: blur(200px);
    top: 0;
    left: 0;
    width: 300px;
height: 300px;
animation: EllipseAnim 40s ease 0s infinite normal forwards;

@keyframes EllipseAnim {
	0% {
		top: 0;
    left: 0;
	}

	10% {
		top: 10vh;
        left: 18vh;
	}

	20% {
		top: 16vh;
        left: 22vh;
	}

    30% {
        top: 40vh;
        left: 58vh;
	}

    40% {
        top: 68vh;
        left: 80vh;
	}

    50% {
        top: 80vh;
        left: 44vh;
	}

    60% {
        top: 24vh;
        left: 90vh;
	}

    70% {
        top: 78vh;
        left: 34vh;
	}

    80% {
        top: 35vh;
        left: 10vh;
	}

    90% {
        top: 44vh;
        left: 67vh;
	}

    100% {
        top: 80vh;
        left: 19vh;
	}
}
`

const Ellipse = () => {
    return(
    <EllipseInt></EllipseInt>
    )
}

export default Ellipse;