"use client"
import React from 'react';
import { motion } from 'framer-motion';

// Function to extract video ID from YouTube link
const extractVideoId = (url: string) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeVideo = ({ videoUrl = "" }) => {
  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return <p className="text-red-500 text-xs font-mono">Invalid YouTube URL</p>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#0a0a0a] p-2 border border-white/5 rounded-3xl shadow-xl hover:shadow-[#c5a880]/5 hover:border-[#c5a880]/30 transition-all duration-500 group"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/5">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src={embedUrl}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default YouTubeVideo;
