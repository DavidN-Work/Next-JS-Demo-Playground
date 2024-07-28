/*
 * File: TCardProps.ts
 * Project: demo-app
 * Created Date: Sunday, July 28th 2024, 6:31:27 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sun Jul 28 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

export type CardProps = {
  imgUrl: string;
  testimonial: string;
  author: string;
  handleShuffle: () => void;
  position: number;
};
