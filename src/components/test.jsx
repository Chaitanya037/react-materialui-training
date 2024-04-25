import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/particles/Paragraph';
import Icon from 'components/particles/Icon';
import { fontSize, fontWeight } from 'components/styles/scales';
import media from 'components/styles/media';
import { Color, ChipLabel } from '@usn/atlas-core';
import { getRelAttr } from 'util/common-utils';
import { getBlueshiftLeadStartAttributes } from 'components/util/blueshift/events';
import Tooltip from 'components/molecules/Tooltip';

const { white00, blue50, blue05, gray30, gray50 } = Color;

const Link = styled.a`
    text-decoration: none;
    color: unset;
`;

const Content = styled.div`
    font-family: Roboto, 'Helvetica Neue', Helvetica, sans-serif;
    display: flex;
    align-items: center;
    font-size: ${fontSize(2)};
    font-weight: ${fontWeight(7)};
`;

const CouponIcon = styled(Icon)`
    position: relative;
    margin: 0.5rem 0rem 0.5rem 0.5rem;
`;

const CustomStyleTooltip = css`
    & > div {
        background: ${gray30} !important;
        border-left: none !important;
        color: ${white00};
        max-width: 300px;
    }
    & > div > div > div:nth-child(2) {
        margin-bottom: 0 !important;
    }
    & > div > div > div {
        ${media.large`
            display: block;
        `};
    }
    & > div > div > div > svg {
        fill: ${white00};
        width: 0.875rem;
        height: 0.875rem;
    }
`;

const TooltipDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const PromoCode = styled(
    ({
        children,
        className,
        color,
        shadow,
        border,
        backgroundColor,
        width,
        height,
        widthLarge,
        heightLarge,
        dataTrackingId,
        dataTrackingCampaign,
        dataTrackingPlacement,
        dataTrackingPartner,
        dataTrackingDestinationUrl,
        tracking,
        sponsored,
        icon,
        cta_url,
        chiplabel,
        chiplabeltext,
        chipLabelSize,
        contentSize,
        centered,
        textClamp,
        product_id,
        tooltipDescription,
    }) => {
        return (
            <div
                className={className}
                border={border}
                backgroundColor={backgroundColor}
                width={width}
                height={height}
                widthLarge={widthLarge}
                heightLarge={heightLarge}
                centered={centered}
            >
                <Link
                    title={children}
                    href={cta_url}
                    data-tracking-id={dataTrackingId}
                    data-tracking-campaign={dataTrackingCampaign}
                    data-tracking-placement={dataTrackingPlacement}
                    data-tracking-partner={dataTrackingPartner || ''}
                    data-tracking-destination-url={dataTrackingDestinationUrl || cta_url}
                    {...getBlueshiftLeadStartAttributes(product_id)}
                    {...tracking}
                    {...getRelAttr(sponsored, cta_url)}
                    target="_blank"
                >
                    {chiplabel && (
                        <ChipLabel
                            style={!centered && { marginLeft: '.25rem', marginTop: '.5rem' }}
                            backgroundColor={'white'}
                            borderColor={blue50}
                            size={chipLabelSize || 'medium'}
                            textColor={blue50}
                        >
                            {chiplabeltext}
                        </ChipLabel>
                    )}
                
                    <Content>
                        {sponsored && (
                            <CouponIcon
                                fill={color}
                                name={icon}
                                shadow={shadow}
                                size="1.5rem"
                            />
                        )}
                        <Paragraph
                            size={contentSize || 3}
                            clamped={textClamp ?? null}
                            style={{ width: '100%', padding: '.25rem' }}
                            dangerouslySetInnerHTML={{ __html: children }}
                        />
                        {tooltipDescription && <Tooltip
                            headingContent={
                                <>
                                    <TooltipDescription>
                                        <Icon name="info" fill="#fff" size={'2rem'} />
                                        <Paragraph className={'ml2'} size={2} dangerouslySetInnerHTML={{ __html: tooltipDescription }} />
                                    </TooltipDescription>
                                    
                                </>
                            }
                            direction="left"
                            customStyling={CustomStyleTooltip}
                            customContentWidth={300}
                        >
                            <div>
                                <Icon name="info" fill="#888" size={'1.2rem'} />
                            </div>
                        </Tooltip>}
                    </Content>
                </Link>
            </div>
        );
    }
)`
    padding: .5rem;
    align-items: center;
    justify-content: center;
    ${(props) => props.centered && `
        text-align: center;
    `};
    border: ${(props) => `1px solid ${props.border}`};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color || gray50};
    transition: all 0.5s ease;
    border-radius: 5px;
    height: ${(props) => props.height && props.height};
    width: ${(props) => props.width && props.width};
    ${media.large`
        width: ${(props) => props.widthLarge && props.widthLarge};
        height:${(props) => props.heightLarge && props.heightLarge};
    `};
`;

PromoCode.propTypes = {
    dataTrackingId: PropTypes.string,
    dataTrackingCampaign: PropTypes.string,
    dataTrackingPlacement: PropTypes.string,
    dataTrackingPartner: PropTypes.string,
    dataTrackingDestinationUrl: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    backgroundColor: PropTypes.string,
    sponsored: PropTypes.bool,
    chiplabel: PropTypes.bool,
    chiplabeltext: PropTypes.string,
    chipLabelSize: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    widthLarge: PropTypes.string,
    heightLarge: PropTypes.string,
    contentSize: PropTypes.number,
    cta_url: PropTypes.string,
    product_id: PropTypes.string,

    // additional tracking attributes that will be spread on the Anchor
    tracking: PropTypes.object,
    centered: PropTypes.bool,
    textClamp: PropTypes.number,
};

PromoCode.defaultProps = {
    border: 'none',
    color: blue50,
    backgroundColor: blue05,
    chiplabeltext: 'U.S.News Exclusive Deal',
    icon: 'money',
    centered: false,
    sponsored: false,
    tooltipDescription: '*Minimum of 3-month purchase required. Only available for new customers.',
};

export default memo(PromoCode);
