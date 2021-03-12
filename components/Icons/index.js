import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.i`
  display: ${({isInline}) => isInline ? 'inline-block' : 'block'};
  width: ${({size}) => size ? size : '24px'};
  height: ${({size}) => size ? size : '24px'};
  color: ${({color, theme}) => color ? color : theme.colors.secondary};
`;

export const HomeIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.333 26.667V16.232a5.332 5.332 0 00-1.67-3.877l-9.831-9.291a2.667 2.667 0 00-3.664 0l-9.83 9.29a5.333 5.333 0 00-1.671 3.878v10.435a2.667 2.667 0 002.666 2.666h21.334a2.667 2.667 0 002.666-2.666z" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </IconWrapper>
)

export const UserIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16a6.667 6.667 0 100-13.333A6.667 6.667 0 0016 16zM22.667 18.667h.469a3.999 3.999 0 013.968 3.504l.521 4.165a2.666 2.666 0 01-2.646 2.997H7.02a2.666 2.666 0 01-2.646-2.997l.52-4.165a4 4 0 013.97-3.504h.468" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </IconWrapper>
)

export const PlanetIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M16 26.667c5.891 0 10.667-4.776 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667z" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.199 6.465c-4.036-3.022-7.236-4.48-8.226-3.492-1.565 1.566 2.998 8.667 10.191 15.86 7.195 7.194 14.296 11.756 15.86 10.191.575-.573.324-1.895-.58-3.692" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </IconWrapper>
)

export const TwitterIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.524 6.583c-1.113.493-2.31.826-3.567.977a6.226 6.226 0 002.731-3.437 12.4 12.4 0 01-3.944 1.506 6.213 6.213 0 00-10.584 5.667 17.638 17.638 0 01-12.803-6.49 6.208 6.208 0 00-.84 3.122 6.213 6.213 0 002.763 5.17 6.196 6.196 0 01-2.813-.777v.08a6.214 6.214 0 004.982 6.091 6.257 6.257 0 01-2.805.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.496 0-.99-.03-1.483-.087a17.567 17.567 0 009.52 2.79c11.427 0 17.674-9.463 17.674-17.671 0-.267-.007-.536-.019-.803a12.625 12.625 0 003.097-3.213l.003-.004z" fill="currentcolor"/></svg>
  </IconWrapper>
)

export const GithubIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76A16.028 16.028 0 0032 16c0-8.84-7.16-16-16-16z" fill="currentcolor"/></svg>
  </IconWrapper>
)

export const LinkedinIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.333 3.784a2.45 2.45 0 012.451-2.45h24.43a2.45 2.45 0 012.453 2.45v24.43a2.45 2.45 0 01-2.452 2.453H3.784a2.451 2.451 0 01-2.45-2.452V3.784zm11.611 8.733h3.972v1.995c.573-1.147 2.04-2.179 4.244-2.179 4.225 0 5.227 2.284 5.227 6.475v7.763H22.11v-6.808c0-2.387-.574-3.734-2.03-3.734-2.02 0-2.86 1.452-2.86 3.734v6.808h-4.277V12.517zM5.611 26.388h4.277V12.333H5.611v14.055zM10.5 7.749a2.751 2.751 0 11-5.501.121 2.751 2.751 0 015.501-.12z" fill="currentcolor"/></svg>
  </IconWrapper>
)

export const ExternalLinkIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L28 4M21.333 4H28v6.667M28 18.667v6.666A2.667 2.667 0 0125.333 28H6.667A2.667 2.667 0 014 25.333V6.667A2.667 2.667 0 016.667 4h6.666" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </IconWrapper>
)

export const BackArrowIcon = ({color, size, isInline}) => (
  <IconWrapper size={size} color={color} isInline={isInline}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.667 6.667L5.333 16l9.334 9.333M5.333 16h21.334" stroke="currentcolor" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </IconWrapper>
)
