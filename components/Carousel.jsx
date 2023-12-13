// "use client";

// import { useState, useRef } from "react";
// import { motion, useMotionValue, easeInOut } from "framer-motion";

// // https://github.com/Jeyprox/framer-carousel/blob/master/src/app/page.tsx

// const Carousel = (props) => {
//     const containerRef = useRef(null);
//     const itemsRef = useRef(null);
//     const [activeSlide, setActiveSlide] = useState(1);
//     const canScrollPrevious = activeSlide > 1;
//     const canScrollNext = activeSlide < props.children.length;
//     const [isDragging, setIsDragging] = useState(false);
