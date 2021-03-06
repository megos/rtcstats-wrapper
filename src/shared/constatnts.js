import Enum from "enum";

/**
 * Represents an Item of an Enum.
 * @typedef EnumItem
 * @property {String} key   The Enum key.
 * @property {Number} value The Enum value.
 * @see {@link https://github.com/adrai/enum}
 */

/**
 * Enum for stats object references
 *
 * @readonly
 * @property {EnumItem} RTCCodecs - Reference for stats of the codecs.
 * @property {EnumItem} RTCInboundRtpVideoStreams - Reference for stats represents the incoming RTP video streams.
 * In general, there is one `RTCInboundRtpVideoStreams` corresponding to one MediaStream that receives video tracks.
 * @property {EnumItem} RTCInboundRtpAudioStreams - Reference for stats represents the incoming RTP audio streams.
 * @property {EnumItem} RTCOutboundRtpVideoStreams - Reference for stats represents the outgoing RTP video streams.
 * @property {EnumItem} RTCOutboundRtpAudioStreams - Reference for stats represents the outgoing RTP audio streams.
 * @property {EnumItem} RTCRemoteInboundRtpVideoStreams - Reference for stats represents the metrics reported in RR or XR corresponding to sending video streams.
 * @property {EnumItem} RTCRemoteInboundRtpAudioStreams - Reference for stats represents the metrics reported in RR or XR corresponding to sending audio streams.
 * @property {EnumItem} RTCRemoteOutboundRtpVideoStreams - Reference for stats represents the metrics reported in SR corresponding to receiving video streams.
 * @property {EnumItem} RTCRemoteOutboundRtpAudioStreams - Reference for stats represents the metrics reported in SR corresponding to receiving audio streams.
 * @property {EnumItem} RTCVideoSources - Reference for stats represents video tracks which are attached to one or more sender.
 * @property {EnumItem} RTCAudioSources - Reference for stats represents audio tracks which are attached to one or more sender.
 * @property {EnumItem} RTCRtpContributingSources - Reference for stats represents CSRCs contributing to an incoming RTP stream.
 * @property {EnumItem} RTCPeerConnection - Reference for stats which have the record of datachannels establishment.
 * @property {EnumItem} RTCDataChannels - Reference for stats of the data channels.
 * @property {EnumItem} RTCMediaStreams - Reference for stats of the media streams.
 * @property {EnumItem} RTCVideoSenders - Reference for stats represents the sender of one video track.
 * @property {EnumItem} RTCAudioSenders - Reference for stats represents the sender of one audio track.
 * @property {EnumItem} RTCVideoReceivers - Reference for stats represents the receiver of one video track.
 * @property {EnumItem} RTCAudioReceivers - Reference for stats represents the receiver of one audio track.
 * @property {EnumItem} RTCTransports - Reference for stats represents ICE and DTLS transport.
 * @property {EnumItem} RTCIceCandidatePairs - Reference for stats represents ICE candidate pairs, includes deleted or unnominate pairs.
 * @property {EnumItem} RTCLocalIceCandidates - Reference for stats represents local ICE candidates.
 * @property {EnumItem} RTCRemoteIceCandidates - Reference for stats represents remote ICE candidates.
 * @property {EnumItem} RTCCertificates - Reference for stats of certificates used by an ICE transports.
 * @property {EnumItem} RTCStunServerConnections - Reference for stats of transports between STUN and TURN servers.
 * @example
 * import {
 *   ChromeRTCStatsReport,
 *   RTCStatsReferences
 * } from 'rtcstats-wrapper';
 *
 * const report = new BaseRTCStatsReport(await pc.getStats());
 *
 * // get stats of incoming RTP stream
 * const recvVideoStats = report.get(RTCStatsReferences.RTCInboundRtpVideoStreams.key)
 *
 * // get each log of inbound-rtp
 * for (const stats of recvVideoStats) {
 *   logger.info(JSON.stringify(stats));
 * }
 */
export const RTCStatsReferences = new Enum([
  "RTCCodecs",
  "RTCInboundRtpVideoStreams",
  "RTCInboundRtpAudioStreams",
  "RTCOutboundRtpVideoStreams",
  "RTCOutboundRtpAudioStreams",
  "RTCRemoteInboundRtpVideoStreams",
  "RTCRemoteInboundRtpAudioStreams",
  "RTCRemoteOutboundRtpVideoStreams",
  "RTCRemoteOutboundRtpAudioStreams",
  "RTCVideoSources",
  "RTCAudioSources",
  "RTCRtpContributingSources",
  "RTCPeerConnection",
  "RTCDataChannels",
  "RTCMediaStreams",
  "RTCVideoSenders",
  "RTCAudioSenders",
  "RTCVideoReceivers",
  "RTCAudioReceivers",
  "RTCTransports",
  "RTCIceCandidatePairs",
  "RTCLocalIceCandidates",
  "RTCRemoteIceCandidates",
  "RTCCertificates",
  "RTCStunServerConnections"
]);

export const RTCStatsReferenceMap = new Map([
  [
    RTCStatsReferences.RTCCodecs.key,
    [
      "type",
      "id",
      "payloadType",
      "codecType",
      "transportId",
      "mimeType",
      "clockRate",
      "channels",
      "sdpFmtpLine",
      "implementation"
    ]
  ],
  [
    RTCStatsReferences.RTCInboundRtpVideoStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsReceived",
      "packetsLost",
      "jitter",
      "packetsDiscarded",
      "packetsRepaired",
      "burstPacketsLost",
      "burstPacketsDiscarded",
      "burstLossCount",
      "burstDiscardCount",
      "burstLossRate",
      "burstDiscardRate",
      "gapLossRate",
      "gapDiscardRate",
      "trackId",
      "receiverId",
      "remoteId",
      "framesDecoded",
      "qpSum",
      "lastPacketReceivedTimestamp",
      "averageRtcpInterval",
      "fecPacketsReceived",
      "bytesReceived",
      "packetsFailedDecryption",
      "packetsDuplicated",
      "perDscpPacketsReceived",
      "firCount",
      "pliCount",
      "nackCount",
      "sliCount"
    ]
  ],
  [
    RTCStatsReferences.RTCInboundRtpAudioStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsReceived",
      "packetsLost",
      "jitter",
      "packetsDiscarded",
      "packetsRepaired",
      "burstPacketsLost",
      "burstPacketsDiscarded",
      "burstLossCount",
      "burstDiscardCount",
      "burstLossRate",
      "burstDiscardRate",
      "gapLossRate",
      "gapDiscardRate",
      "trackId",
      "receiverId",
      "remoteId",
      "lastPacketReceivedTimestamp",
      "averageRtcpInterval",
      "fecPacketsReceived",
      "bytesReceived",
      "packetsFailedDecryption",
      "packetsDuplicated",
      "perDscpPacketsReceived"
    ]
  ],
  [
    RTCStatsReferences.RTCOutboundRtpVideoStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsSent",
      "packetsDiscardedOnSend",
      "fecPacketsSent",
      "bytesSent",
      "bytesDiscardedOnSend",
      "trackId",
      "mediaSourceId",
      "senderId",
      "remoteId",
      "lastPacketSentTimestamp",
      "retransmittedPacketsSent",
      "retransmittedBytesSent",
      "targetBitrate",
      "totalEncodedBytesTarget",
      "framesEncoded",
      "qpSum",
      "totalEncodeTime",
      "totalPacketSendDelay",
      "averageRtcpInterval",
      "qualityLimitationReason",
      "qualityLimitationDurations",
      "perDscpPacketsSent",
      "nackCount",
      "firCount",
      "pliCount",
      "sliCount"
    ]
  ],
  [
    RTCStatsReferences.RTCOutboundRtpAudioStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsSent",
      "packetsDiscardedOnSend",
      "fecPacketsSent",
      "bytesSent",
      "bytesDiscardedOnSend",
      "trackId",
      "mediaSourceId",
      "senderId",
      "remoteId",
      "lastPacketSentTimestamp",
      "retransmittedPacketsSent",
      "retransmittedBytesSent",
      "totalEncodedBytesTarget",
      "totalPacketSendDelay",
      "averageRtcpInterval",
      "qualityLimitationReason",
      "qualityLimitationDurations",
      "perDscpPacketsSent"
    ]
  ],
  [
    RTCStatsReferences.RTCRemoteInboundRtpVideoStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsReceived",
      "packetsLost",
      "jitter",
      "packetsDiscarded",
      "packetsRepaired",
      "burstPacketsLost",
      "burstPacketsDiscarded",
      "burstLossCount",
      "burstDiscardCount",
      "burstLossRate",
      "burstDiscardRate",
      "gapLossRate",
      "gapDiscardRate",
      "localId",
      "roundTripTime",
      "fractionLost"
    ]
  ],
  [
    RTCStatsReferences.RTCRemoteInboundRtpAudioStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsReceived",
      "packetsLost",
      "jitter",
      "packetsDiscarded",
      "packetsRepaired",
      "burstPacketsLost",
      "burstPacketsDiscarded",
      "burstLossCount",
      "burstDiscardCount",
      "burstLossRate",
      "burstDiscardRate",
      "gapLossRate",
      "gapDiscardRate",
      "localId",
      "roundTripTime",
      "fractionLost"
    ]
  ],
  [
    RTCStatsReferences.RTCRemoteOutboundRtpVideoStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsSent",
      "packetsDiscardedOnSend",
      "fecPacketsSent",
      "bytesSent",
      "bytesDiscardedOnSend",
      "localId",
      "remoteTimestamp"
    ]
  ],
  [
    RTCStatsReferences.RTCRemoteOutboundRtpAudioStreams.key,
    [
      "timestamp",
      "type",
      "id",
      "ssrc",
      "kind",
      "transportId",
      "codecId",
      "packetsSent",
      "packetsDiscardedOnSend",
      "fecPacketsSent",
      "bytesSent",
      "bytesDiscardedOnSend",
      "localId",
      "remoteTimestamp"
    ]
  ],
  [
    RTCStatsReferences.RTCVideoSources.key,
    [
      "timestamp",
      "type",
      "id",
      "trackIdentifier",
      "kind",
      "width",
      "height",
      "frames",
      "framesPerSecond"
    ]
  ],
  [
    RTCStatsReferences.RTCAudioSources.key,
    ["timestamp", "type", "id", "trackIdentifier", "kind"]
  ],
  [
    RTCStatsReferences.RTCRtpContributingSources.key,
    [
      "timestamp",
      "type",
      "id",
      "contributorSsrc",
      "inboundRtpStreamId",
      "packetsContributedTo",
      "audioLevel"
    ]
  ],
  [
    RTCStatsReferences.RTCPeerConnection.key,
    [
      "timestamp",
      "type",
      "id",
      "dataChannelsOpened",
      "dataChannelsClosed",
      "dataChannelsRequested",
      "dataChannelsAccepted"
    ]
  ],
  [
    RTCStatsReferences.RTCDataChannels.key,
    [
      "timestamp",
      "type",
      "id",
      "label",
      "protocol",
      "dataChannelIdentifier",
      "transportId",
      "state",
      "messagesSent",
      "bytesSent",
      "messagesReceived",
      "bytesReceived"
    ]
  ],
  [
    RTCStatsReferences.RTCMediaStreams.key,
    ["timestamp", "type", "id", "streamIdentifier", "trackIds"]
  ],
  [
    RTCStatsReferences.RTCVideoSenders.key,
    [
      "timestamp",
      "type",
      "id",
      "trackIdentifier",
      "remoteSource",
      "ended",
      "kind",
      "priority",
      "frameWidth",
      "frameHeight",
      "framesPerSecond",
      "mediaSourceId",
      "framesCaptured",
      "framesSent",
      "hugeFramesSent",
      "keyFramesSent"
    ]
  ],
  [
    RTCStatsReferences.RTCAudioSenders.key,
    [
      "timestamp",
      "type",
      "id",
      "trackIdentifier",
      "remoteSource",
      "ended",
      "kind",
      "priority",
      "audioLevel",
      "totalAudioEnergy",
      "voiceActivityFlag",
      "totalSamplesDuration",
      "mediaSourceId",
      "echoReturnLoss",
      "echoReturnLossEnhancement",
      "totalSamplesSent"
    ]
  ],
  [
    RTCStatsReferences.RTCVideoReceivers.key,
    [
      "timestamp",
      "type",
      "id",
      "trackIdentifier",
      "remoteSource",
      "ended",
      "kind",
      "priority",
      "frameWidth",
      "frameHeight",
      "framesPerSecond",
      "estimatedPlayoutTimestamp",
      "jitterBufferDelay",
      "jitterBufferEmittedCount",
      "framesReceived",
      "keyFramesReceived",
      "framesDecoded",
      "framesDropped",
      "partialFramesLost",
      "fullFramesLost"
    ]
  ],
  [
    RTCStatsReferences.RTCAudioReceivers.key,
    [
      "timestamp",
      "type",
      "id",
      "trackIdentifier",
      "remoteSource",
      "ended",
      "kind",
      "priority",
      "audioLevel",
      "totalAudioEnergy",
      "voiceActivityFlag",
      "totalSamplesDuration",
      "estimatedPlayoutTimestamp",
      "jitterBufferDelay",
      "jitterBufferEmittedCount",
      "totalSamplesReceived",
      "concealedSamples",
      "silentConcealedSamples",
      "concealmentEvents",
      "insertedSamplesForDeceleration",
      "removedSamplesForAcceleration"
    ]
  ],
  [
    RTCStatsReferences.RTCTransports.key,
    [
      "timestamp",
      "type",
      "id",
      "packetsSent",
      "packetsReceived",
      "bytesSent",
      "bytesReceived",
      "rtcpTransportStatsId",
      "iceRole",
      "dtlsState",
      "selectedCandidatePairId",
      "localCertificateId",
      "remoteCertificateId",
      "tlsVersion",
      "dtlsCipher",
      "srtpCipher",
      "tlsGroup"
    ]
  ],
  [
    RTCStatsReferences.RTCIceCandidatePairs.key,
    [
      "timestamp",
      "type",
      "id",
      "transportId",
      "localCandidateId",
      "remoteCandidateId",
      "state",
      "nominated",
      "packetsSent",
      "packetsReceived",
      "bytesSent",
      "bytesReceived",
      "lastPacketSentTimestamp",
      "lastPacketReceivedTimestamp",
      "firstRequestTimestamp",
      "lastRequestTimestamp",
      "lastResponseTimestamp",
      "totalRoundTripTime",
      "currentRoundTripTime",
      "availableOutgoingBitrate",
      "availableIncomingBitrate",
      "circuitBreakerTriggerCount",
      "requestsReceived",
      "requestsSent",
      "responsesReceived",
      "responsesSent",
      "retransmissionsReceived",
      "retransmissionsSent",
      "consentRequestsSent",
      "consentExpiredTimestamp"
    ]
  ],
  [
    RTCStatsReferences.RTCLocalIceCandidates.key,
    [
      "timestamp",
      "type",
      "id",
      "transportId",
      "networkType",
      "address",
      "port",
      "protocol",
      "candidateType",
      "priority",
      "url",
      "relayProtocol",
      "deleted"
    ]
  ],
  [
    RTCStatsReferences.RTCRemoteIceCandidates.key,
    [
      "timestamp",
      "type",
      "id",
      "transportId",
      "address",
      "port",
      "protocol",
      "candidateType",
      "priority"
    ]
  ],
  [
    RTCStatsReferences.RTCCertificates.key,
    [
      "timestamp",
      "type",
      "id",
      "fingerprint",
      "fingerprintAlgorithm",
      "base64Certificate",
      "issuerCertificateId"
    ]
  ],
  [
    RTCStatsReferences.RTCStunServerConnections.key,
    [
      "timestamp",
      "type",
      "id",
      "url",
      "port",
      "protocol",
      "networkType",
      "totalRequestsSent",
      "totalResponsesReceived",
      "totalRoundTripTime"
    ]
  ]
]);
