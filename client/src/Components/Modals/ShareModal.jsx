import React from "react";
import MainModal from "./MainModal";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share'

function ShareMovieModal({ modalOpen, setModalOpen, movie }) {

    const shareData=[
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton,
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton,
        },
        {
            icon: FaTelegram,
            shareButton: TelegramShareButton,
        },
        {
            icon: FaWhatsapp,
            shareButton: WhatsappShareButton,
        },
    ]

    const url= `${window.location.protocol}//${window.location.hash}/movie/${movie.name}`

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-2xl">
            Share <span className="text-2xl font-bold">"{movie?.name}"</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {
            shareData.map((data, index) => (
                <data.shareButton key={index} url={url} quote="Youtube | Video Streaming Platform">
                    <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                        <data.icon />
                    </div>
                </data.shareButton>
            ))
          }
        </form>
      </div>
    </MainModal>
  );
}

export default ShareMovieModal;
