<?php

if ( !class_exists( 'MeowCommon_News' ) ) {

	class MeowCommon_News {
		private $domain = null;
		private $topic = null;
		private $fromDate = null;
		private $toDate = null;

		public function __construct( $domain ) {
			$this->domain = $domain;
			$this->topic = "mwai-1.0";
			$this->fromDate = new DateTime( '2023-02-01' );
			$this->toDate = new DateTime( '2023-06-01' );
			
      if ( is_admin() ) {
				// Time constraint for the news.
				$now = new DateTime();
				if ( $now < $this->fromDate || $now > $this->toDate ) {
					return;
				}

				if ( isset( $_SESSION['meowapps_news_displayed'] ) ) { return; }
				$_SESSION['meowapps_news_displayed'] = true;

				// Other constraint for the news.
				$mwai_options = get_option( 'mwai_options' );
				if ( !empty( $mwai_options ) ) {
					return;
				}

				// Check the news date.
        $news_date = $this->retrieve_news_date();

      }
		}

		function retrieve_news_date() {
			$news = get_option( 'meowapps_news', [ 'topic' => $this->topic, 'date' => null ] );
			// New Topic or Fresh Option => Plan the news.
			if ( $news['topic'] !== $this->topic || $news['date'] === null ) {
				$two_days = strtotime( '+3 days' );
				$seven_days = strtotime( '+7 days' );
				$news['topic'] = $this->topic;
				$news['date'] = mt_rand( $two_days, $seven_days );
				update_option( 'meowapps_news', $news, false );
			}
			return $news['date'];
		}
	}
}

?>
