// @flow

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PlayerCreators } from '~/store/ducks/player';
import { Creators as LocalPodcastsManagerCreators } from '~/store/ducks/localPodcastsManager';
import { Creators as PlaylistsCreators } from '~/store/ducks/playlist';

import HomeComponent from './components/HomeComponent';
import CONSTANTS from '~/utils/CONSTANTS';

type Props = {
  LOCAL_STACK_ROUTES: Object,
  navigation: Object,
};

class HomeContainer extends Component<Props, {}> {
  componentDidMount() {
    const {
      createPlaylist,
      setPodcastsDownloadedList,
      navigation,
      loadPlaylists,
      loadPodcastsRecentlyPlayed,
    } = this.props;

    // createPlaylist('MY_PLAYLIST');

    setPodcastsDownloadedList();

    loadPodcastsRecentlyPlayed();

    loadPlaylists();

    const { LOCAL_STACK_ROUTES } = this.props;

    navigation.setParams({
      LOCAL_STACK_ROUTES,
    });
  }

  render() {
    const { navigation } = this.props;

    return <HomeComponent
      navigation={navigation}
    />;
  }
}

const Creators = Object.assign(
  {},
  LocalPodcastsManagerCreators,
  PlaylistsCreators,
  PlayerCreators,
);

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HomeContainer);
