'use client'

import { Box, Button, Flex } from '@chakra-ui/react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ComponentPropsWithRef, useCallback } from 'react'

import fakeBanner from '../assets/banners/1.png'
import { useCarouselDotButton } from '../hooks/useCarouselDotButton'
import { useCarouselPrevNextButtons } from '../hooks/useCarouselPrevNextButtons'

type CarouselProps = {
  options?: EmblaOptionsType
}

export function Carousel(props: CarouselProps) {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarouselDotButton(
    emblaApi,
    onNavButtonClick,
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselPrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <Box my={4} mx="auto" maxW={1280}>
      <Box overflow="hidden" className="embla" ref={emblaRef}>
        <Flex className="embla__container">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <Box
                className="embla__slide"
                key={index}
                h={240}
                bg="blue"
                flex="0 0 100%"
              >
                <Image
                  width={1280}
                  height={400}
                  src={fakeBanner}
                  alt="banner 1"
                />
              </Box>
            )
          })}
        </Flex>
      </Box>

      <Flex
        my={2}
        justifyContent="space-between"
        alignItems="center"
        className="embla__controls"
      >
        <Flex alignItems="center" gap={2} className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Flex>

        <Flex gap={2} className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <Box
              w={3}
              h={3}
              rounded="full"
              cursor="pointer"
              bg={index === selectedIndex ? 'gray.300' : ''}
              border={index !== selectedIndex ? '1px solid' : 'none'}
              borderColor="gray.300"
              transition="all .1s ease"
              _hover={{
                filter: 'brightness(85%)',
              }}
              key={index}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

type PropType = ComponentPropsWithRef<'button'>

const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <Button
      size="sm"
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </Button>
  )
}

const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <Button
      size="sm"
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </Button>
  )
}
