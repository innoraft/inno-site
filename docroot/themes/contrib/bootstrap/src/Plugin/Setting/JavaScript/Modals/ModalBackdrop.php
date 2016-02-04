<?php
/**
 * @file
 * Contains \Drupal\bootstrap\Plugin\Setting\JavaScript\Modals\ModalBackdrop.
 */

namespace Drupal\bootstrap\Plugin\Setting\JavaScript\Modals;

use Drupal\bootstrap\Annotation\BootstrapSetting;
use Drupal\bootstrap\Plugin\Setting\SettingBase;
use Drupal\Core\Annotation\Translation;

/**
 * The "modal_backdrop" theme setting.
 *
 * @BootstrapSetting(
 *   id = "modal_backdrop",
 *   type = "select",
 *   title = @Translation("backdrop"),
 *   description = @Translation("Includes a modal-backdrop element. Alternatively, specify <kbd>static</kbd> for a backdrop which doesn't close the modal on click."),
 *   defaultValue = "true",
 *   groups = {
 *     "javascript" = @Translation("JavaScript"),
 *     "modals" = @Translation("Modals"),
 *     "options" = @Translation("Options"),
 *   },
 *   options = {
 *     "false" = @Translation("Disabled"),
 *     "true" = @Translation("Enabled"),
 *     "static" = @Translation("Static"),
 *   },
 * )
 */
class ModalBackdrop extends SettingBase {

  /**
   * {@inheritdoc}
   */
  public function drupalSettings() {
    return !!$this->theme->getSetting('modal_enabled');
  }

}
