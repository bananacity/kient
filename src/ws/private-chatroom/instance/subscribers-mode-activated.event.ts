import { cast } from '@deepkit/type'
import type { SubscribersModeActivatedEvent } from '../dto/subscribers-mode-activated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class SubscribersModeActivatedInstance extends BaseInstance<SubscribersModeActivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SubscribersModeActivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscribersModeActivatedInstance',
        cause: err,
      })
    }
  }
}
