gsap.registerPlugin(ScrollTrigger);

        // Title animation
        gsap.from('.skills-title', {
            scrollTrigger: {
                trigger: '.skills-section-text',
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1
        });

        // Skills items animation
        gsap.utils.toArray('.skill-item').forEach((item, index) => {
            const skillBar = item.querySelector('.skill-level-bar');
            const skillLevel = item.dataset.skillLevel;

            gsap.fromTo(item, 
                {
                    opacity: 0,
                    y: 50
                },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2
                }
            );

            gsap.fromTo(skillBar, 
                { width: 0 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                    },
                    width: skillLevel,
                    duration: 1,
                    delay: index * 0.2
                }
            );
        });