export function PageAnimations() {
  return (
    <style jsx global>{`
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .slideInLeft {
        animation: slideInLeft 1s ease-out;
      }

      .fadeInUp {
        animation: fadeInUp 0.8s ease-out;
      }

      .slideInUp {
        animation: slideInUp 0.8s ease-out;
      }

      .rotatingBadge {
        animation: rotate 20s linear infinite;
      }

      .rotatingSVG {
        animation: rotate 20s linear infinite;
      }
    `}</style>
  );
}
