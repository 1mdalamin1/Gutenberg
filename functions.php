<?php

add_action('wp_footer', 'clg_chaty_widget');
function clg_chaty_widget(){
  ?>

  <style>
    /* ===== Widget Position ===== */
    .chaty-widget{
        position:fixed;
        bottom:25px;
        right:25px;
        z-index:10001;
    }

    /* ===== Channel Button ===== */
    .chaty-channel,
    .chaty-svg{
        width:54px;
        height:54px;
        border-radius:50%;
        display:block;
        cursor:pointer;
        box-shadow:0 16px 24px rgba(73,104,126,.16);
        position:relative;
    }

    /* ===== Icon ===== */
    .chaty-svg svg{
        width:100%;
        height:100%;
        border-radius:50%;
    }

    /* ===== Notification Badge ===== */
    .ch-pending-msg{
        position:absolute;
        top:-4px;
        right:-4px;
        width:16px;
        height:16px;
        background:red;
        color:#fff;
        font-size:10px;
        line-height:16px;
        text-align:center;
        border-radius:50%;
        z-index:10;
    }

    /* ===== Shockwave Animation ===== */
    .chaty-animation-shockwave::before,
    .chaty-animation-shockwave::after{
        content:"";
        position:absolute;
        inset:0;
        border-radius:50%;
        animation:shockwave 2s ease-out infinite;
    }

    .chaty-animation-shockwave::after{
        animation-delay:1.3s;
    }
    .chaty-animation-shockwave::before{
        animation-delay:.8s;
    }

    @keyframes shockwave{
        0%{
            transform:scale(1);
            box-shadow:0 0 2px rgba(0,0,0,.3);
        }
        100%{
            transform:scale(2.25);
            box-shadow:0 0 50px transparent;
        }
    }

    /* ===== Tooltip (Always Visible) ===== */
    .chaty-tooltip-text{
        position:absolute;
        right:70px;
        top:50%;
        transform:translateY(-50%);
        background:#fff;
        color:#333;
        padding:6px 14px;
        border-radius:10px;
        font-size:14px;
        line-height:1;
        white-space:nowrap;
        box-shadow:0 2px 8px rgba(0,0,0,.15);
    }

    /* small arrow */
    .chaty-tooltip-text::after{
        content:"";
        position:absolute;
        right:-10px;
        top:50%;
        transform:translateY(-50%);
        border:6px solid transparent;
        border-left-color:#ffffff;
    }

    /* Mobile hide (optional) */
    /* @media(max-width:768px){
        .chaty-tooltip-text{
            display:none;
        }
    } */

  </style>
  <div class="chaty-widget">
      <a href="https://wa.me/8801752449594?text=PP"
        target="_blank"
        rel="nofollow noopener"
        aria-label="24/7 WhatsApp Chat Support"
        class="chaty-channel">
          <span class="chaty-tooltip-text">💬 24/7 Chat Support</span>
          <span class="chaty-svg chaty-animation-shockwave">
              <svg width="55" height="55" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle><path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path><path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" stroke-width="0.2"></path></svg>
              <span class="ch-pending-msg">1</span>
          </span>
      </a>
  </div>

  <?php 
}

?>

