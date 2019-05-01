import React from 'react'
import PropTypes from 'prop-types'

const BannerGallery = ({ input }) => {
    let items = []
    for (const [index, item] of input.items.entries()) {
        items.push(
            <li  data-slotamount="2" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0" data-saveperformance="off" data-title="Slide" key={index}>
                <img src={item.image.url} alt=""
                    data-bgposition="center top"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat" />




                <div className="tp-caption playfair-display-italic-white-20 tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['1','1','1','1']"
                    data-y="['center','center','center','center']"
                    data-voffset="['78','78','78','50']"
                    data-fontsize="['22','20','15','13']"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="opacity:0;s:250;e:Power3.easeInOut;"
                    data-transform_out="opacity:0;s:300;s:300;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-start="2000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-end="8600">
                    Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts. Separated they live.
                        </div>

                <div className="tp-caption primary-button tp-resizeme"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['center','center','center','center']"
                    data-voffset="['166','166','166','120']"
                    data-fontsize="['20','20','15','13']"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="opacity:0;s:250;e:Power3.easeInOut;"
                    data-transform_out="opacity:0;s:300;s:300;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-start="2200"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-end="8600">
                    <a href='#'>PURCHASE THEME</a>
                </div>

            </li>
        )
    }

    return <React.Fragment>
        <div className="section">
            <div className="no-container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="rev_slider_wrapper fullscreen-container">
                            <div id="rev_slider_1_1" className="rev_slider fullscreenbanner">
                                <ul>


                                    {items}

                                </ul>
                                <div className="tp-bannertimer tp-bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
}

export default BannerGallery

BannerGallery.propTypes = {
    input: PropTypes.object
}
