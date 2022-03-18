
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

export default function Galeria() {
    const [container, setContainer] = useState({});
    const [scrollingElement, setScrollingElement] = useState(null);
    const items = [
        {
            itemId: 'sample-id',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625189/12079230_779684172140542_9110996158053479013_n_nqanrt.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625189/17796584_1167057356736553_4380166508211699276_n_noknrg.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625188/12963868_869711813137777_8301740823221306199_n_zpr5aa.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/1-1-1024x533_bbrub0.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                width: 204,
                height: 106,
                description: 'sample-description',
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/2-1-1024x694_b0q8fa.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                width: 204,
                height: 106,
                description: 'sample-description',
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625188/59067_304239279685036_153214853_n_iihvuw.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/28783382_1465544436887842_7323406619683848192_n_vzjkxb.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/cabaz-1024x678_xraxsw.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/3-1-1024x768_wlctqf.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625186/23318969_1355570287885258_6956238047053848129_n_vix0vn.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625186/23376079_1355571197885167_2631861932146650337_n_dkpql2.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625187/56823448_1960082797434001_8407549115013005312_n_pfxxy1.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625186/DenteFreddy-65-1024x682_b5p9z4.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        {
            itemId: 'differentItem',
            mediaUrl: 'https://res.cloudinary.com/dkmgxnbal/image/upload/v1647625188/16299437_1096970890411867_2446744592516917236_n_jpz7ir.jpg',
            metaData: {
                type: 'image',
                title: 'sample-title',
                description: 'sample-description',
                width: 192,
                height: 128,
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
    ]

    const options = {
        galleryLayout: -1,
        hoveringBehaviour: 'NEVER_SHOW',
    };

    useEffect(() => {
        setContainer({
            width: document.getElementById('container').clientWidth,
            height: document.getElementById('container').clientHeight
        });
        setScrollingElement(window);
    }, []);

    // const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro</title>
                <meta name="description" content="Cultura no Muro - Home" />
            </Head>
            <main id="container" className="main" style={{ textAlign: 'justify' }}>
                <Image src="/acm.jpg" alt="Logo ACM" width={120} height={120} />
                <div style={{ padding: 48, width: '100%' }} />
                <ProGallery
                    items={items}
                    options={options}
                    container={container}
                    eventsListener={() => { }}
                    scrollingElement={scrollingElement}
                />
            </main>
        </div>
    )
}
