import { Bytes } from '@graphprotocol/graph-ts';
import {
  Approval as ApprovalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardClaimed as RewardClaimedEvent,
  RoundFinished as RoundFinishedEvent,
  RoundWinners as RoundWinnersEvent,
  Transfer as TransferEvent,
  UserBetted as UserBettedEvent,
} from '../generated/MyBet/MyBet';
import {
  OwnershipTransferred,
  RewardClaimed,
  RoundFinished,
  RoundWinners,
  UserBetted,
  UserOnRound,
} from '../generated/schema';

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.roundId = event.params.roundId;
  entity.reward = event.params.reward;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let id = Bytes.fromUTF8(
    event.params.user
      .toHex()
      .concat('-')
      .concat(event.params.roundId.toString())
  );

  let entityUserOnRound = UserOnRound.load(id);
  if (!entityUserOnRound) {
    entityUserOnRound = new UserOnRound(id);
  }
  entityUserOnRound.claimed = true;
  entityUserOnRound.save();
}

export function handleRoundFinished(event: RoundFinishedEvent): void {
  let entity = new RoundFinished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.roundId = event.params.roundId;
  entity.winningOption = event.params.winningOption;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRoundWinners(event: RoundWinnersEvent): void {
  let entity = new RoundWinners(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.roundId = event.params.roundId;
  entity.winner = event.params.winner;
  entity.reward = event.params.reward;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let id = Bytes.fromUTF8(
    event.params.winner
      .toHex()
      .concat('-')
      .concat(event.params.roundId.toString())
  );

  let entityUserOnRound = UserOnRound.load(id);
  if (!entityUserOnRound) {
    entityUserOnRound = new UserOnRound(id);
  }
  entityUserOnRound.reward = event.params.reward;
  entityUserOnRound.save();
}

export function handleUserBetted(event: UserBettedEvent): void {
  let entity = new UserBetted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.roundId = event.params.roundId;
  entity.option = event.params.option;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let id = Bytes.fromUTF8(
    event.params.user
      .toHex()
      .concat('-')
      .concat(event.params.roundId.toString())
  );

  let entityUserOnRound = UserOnRound.load(id);
  if (!entityUserOnRound) {
    entityUserOnRound = new UserOnRound(id);
    entityUserOnRound.user = event.params.user;
    entityUserOnRound.roundId = event.params.roundId;
    entityUserOnRound.option = event.params.option;
    entityUserOnRound.amount = event.params.amount;
    entityUserOnRound.claimed = false;
  }
  entityUserOnRound.save();
}
